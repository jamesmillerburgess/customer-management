import { Meteor } from 'meteor/meteor';
import _ from 'lodash/fp';

import * as TM from '../team/teamMethods';

export const saveProfile = (userId, profile) => {
  const fields = {};
  if (profile.username) {
    fields.username = profile.username;
  }
  if (profile.profile) {
    if (profile.profile.locale) {
      fields['profile.locale'] = profile.profile.locale;
    }
  }
  if (profile.avatarURL) {
    fields['profile.avatarURL'] = profile.avatarURL;
  }
  Meteor.users.update(userId, { $set: fields });
  if (profile.team !== undefined) {
    TM.addMember(profile.team, userId);
  }
};

Meteor.methods({
  'profile.save': saveProfile,
});
