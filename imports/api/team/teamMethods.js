import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import _ from 'lodash/fp';

import { isoError } from '../methodUtils';
import * as GM from '../genericMethods';
import Teams from './teamCollection';

const TEAM_FIELDS = ['name'];

export const create = name => {
  check(name, String);
  if (!name) {
    throw new Error('Parameter name must be non-empty');
  }
  if (Teams.findOne({ name })) {
    throw new Error('There is already a team with this name');
  }
  const userId = Meteor.userId();
  const teamId = Teams.insert({
    name,
    owner: userId,
    members: [],
    createDate: new Date(),
  });
  Meteor.users.update(userId, { $push: { ['profile.ownedTeams']: teamId } });
};

export const remove = teamId => {
  if (teamId.constructor.name === 'Array') {
    return teamId.forEach(team => remove(team));
  }
  check(teamId, String);
  const team = Teams.findOne(teamId);
  if (!team) {
    throw new Error('There is no team with this name');
  }
  Teams.remove(teamId);
  Meteor.users.update(
    { _id: { $in: team.members } },
    { $unset: { ['profile.team']: '' } },
    { multi: true }
  );
  Meteor.users.update(
    { _id: team.owner },
    { $pull: { ['profile.ownedTeams']: teamId } }
  );
};

export const update = (teamId, options) => {
  check(teamId, String);
  check(options, Object);
  const fields = _.pick(TEAM_FIELDS, options);
  if (Object.keys(fields).length === 0) {
    throw new Error('Parameter options contains no valid fields');
  }
  const team = Teams.findOne(teamId);
  if (!team) {
    throw new Error('There is no team with the given teamId');
  }
  const update = { $set: fields };
  return Teams.update(teamId, update);
};

const validateAddRemoveMember = (teamId, memberId) => {
  check(teamId, String);
  check(memberId, String);
  const member = Meteor.users.findOne(memberId);
  if (!member) {
    throw new Error('There is no user with the given memberId');
  }
  const team = Teams.findOne(teamId);
  if (!team && teamId) {
    return isoError('There is no team with the given teamId');
  }
  return { team, member };
};

export const addMember = (teamId, memberId) => {
  const docs = validateAddRemoveMember(teamId, memberId);
  if (docs.error) {
    return docs;
  }
  if (docs.team) {
    const memberIndex = docs.team.members.indexOf(memberId);
    if (memberIndex !== -1) {
      throw new Error('The given memberId is already on this team');
    }
    Teams.update(teamId, { $push: { members: memberId } });
  }
  Meteor.users.update(memberId, { $set: { ['profile.team']: teamId } });
};

export const removeMember = (teamId, memberId) => {
  const docs = validateAddRemoveMember(teamId, memberId);
  if (docs.error) {
    return docs;
  }
  const memberIndex = docs.team.members.indexOf(memberId);
  if (memberIndex === -1) {
    throw new Error('The given memberId is not on this team');
  }
  Teams.update(teamId, { $pull: { members: memberId } });
  Meteor.users.update(memberId, { $unset: { ['profile.team']: '' } });
};

export const search = searchText => GM.search(Teams, searchText);

Meteor.methods({
  'team.create': create,
  'team.remove': remove,
  'team.update': update,
  'team.addMember': addMember,
  'team.removeMember': removeMember,
  'team.search': search,
});
