import { Meteor } from 'meteor/meteor';
import _ from 'lodash/fp';

import * as TM from '../team/teamMethods';

const PROFILE_FIELDS = ['username'];

export const saveProfile = (userId, profile) => {
  const fields = _.pick(PROFILE_FIELDS, profile);
  Meteor.users.update(userId, { $set: fields });
  const oldTeam = Meteor.users.findOne(userId).profile.team;
  const newTeam = profile.team;
  if (newTeam) {
    if (oldTeam) {
      TM.removeMember(oldTeam, userId);
    }
    TM.addMember(newTeam, userId);
  }
};

Meteor.methods({
  'profile.save': saveProfile,
});
