import { Meteor } from 'meteor/meteor';
import _ from 'lodash/fp';

import * as TM from '../team/teamMethods';

export const saveProfile = (userId, profile) => {
  Meteor.users.update(userId, {
    $set: {
      username: profile.username,
      ['profile.locale']: (profile.profile || {}).locale,
    },
  });
  if (profile.team !== undefined) {
    TM.addMember(profile.team, userId);
  }
};

Meteor.methods({
  'profile.save': saveProfile,
});
