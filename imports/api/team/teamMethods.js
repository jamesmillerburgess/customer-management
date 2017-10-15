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

export const addMember = (teamId, memberId) => {
  check(teamId, String);
  check(memberId, String);
  const team = Teams.findOne(teamId);
  const member = Meteor.users.findOne(memberId);
  if (team && team.members.indexOf(memberId) === -1) {
    Teams.update(teamId, { $push: { members: memberId } });
  }
  if (member.profile && member.profile.team && member.profile.team !== teamId) {
    Teams.update(member.profile.team, { $pull: { members: memberId } });
  }
  Meteor.users.update(memberId, { $set: { ['profile.team']: teamId } });
};

export const removeMember = (teamId, memberId) => {
  check(teamId, String);
  check(memberId, String);
  const team = Teams.findOne(teamId);
  const member = Meteor.users.findOne(memberId);
  if (member.profile && member.profile.team && member.profile.team === teamId) {
    Teams.update(member.profile.team, { $pull: { members: memberId } });
  }
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
