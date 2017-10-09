import { Meteor } from 'meteor/meteor';
import validate from 'validate.js';
import _ from 'lodash/fp';

import Teams from './teamCollection';

const TEAM_FIELDS = ['name'];

export const create = name => {
  if (!validate.isString(name)) {
    throw new Error('Parameter name must be a string');
  }
  if (!name) {
    throw new Error('Parameter name must be non-empty');
  }
  if (Teams.findOne({ name })) {
    throw new Error('There is already a team with this name');
  }
  return Teams.insert({ name, members: [] });
};

export const remove = teamId => {
  if (!validate.isString(teamId)) {
    throw new Error('Parameter name must be a string');
  }
  const team = Teams.findOne(teamId);
  if (!team) {
    throw new Error('There is no team with this name');
  }
  Teams.remove(teamId);
  Meteor.users.update(
    { _id: { $in: [team.members] } },
    { $pull: { teams: teamId } },
    { multi: true }
  );
};

export const update = (teamId, options) => {
  if (!validate.isString(teamId)) {
    throw new Error('Parameter teamId must be a string');
  }
  if (!validate.isObject(options)) {
    throw new Error('Parameter teamId must be an object');
  }
  const fields = _.pick(TEAM_FIELDS, options);
  if (validate.isEmpty(fields)) {
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
  if (!validate.isString(teamId)) {
    throw new Error('Parameter teamId must be a string');
  }
  if (!validate.isString(memberId)) {
    throw new Error('Parameter memberId must be a string');
  }
  const member = Meteor.users.findOne(memberId);
  if (!member) {
    throw new Error('There is no user with the given memberId');
  }
  const team = Teams.findOne(teamId);
  if (!team) {
    throw new Error('There is no team with the given teamId');
  }
  const memberIndex = team.members.indexOf(memberId);
  if (memberIndex !== -1) {
    throw new Error('The given memberId is already on this team');
  }
  Teams.update(teamId, { $push: { members: memberId } });
  Meteor.users.update(memberId, { $push: { teams: teamId } });
};

export const removeMember = (teamId, memberId) => {
  if (!validate.isString(teamId)) {
    throw new Error('Parameter teamId must be a string');
  }
  if (!validate.isString(memberId)) {
    throw new Error('Parameter memberId must be a string');
  }
  const member = Meteor.users.findOne(memberId);
  if (!member) {
    throw new Error('There is no user with the given memberId');
  }
  const team = Teams.findOne(teamId);
  if (!team) {
    throw new Error('There is no team with the given teamId');
  }
  const memberIndex = team.members.indexOf(memberId);
  if (memberIndex === -1) {
    throw new Error('The given memberId is not on this team');
  }
  Teams.update(teamId, { $pull: { members: memberId } });
  Meteor.users.update(memberId, { $pull: { teams: teamId } });
};

Meteor.methods({
  'team.create': create,
  'team.remove': remove,
  'team.update': update,
  'team.addMember': addMember,
  'team.removeMember': removeMember,
});
