import { Meteor } from 'meteor/meteor';
import _ from 'lodash/fp';

import * as TM from '../team/teamMethods';

const PROFILE_FIELDS = ['username'];

export const saveProfile = (userId, profile) => {
  const fields = _.pick(PROFILE_FIELDS, profile);
  Meteor.users.update(userId, { $set: fields });
  if (profile.team !== undefined) {
    TM.addMember(profile.team, userId);
  }
};

Meteor.methods({
  'profile.save': saveProfile,
});
