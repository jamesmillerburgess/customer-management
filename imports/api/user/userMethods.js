import { Meteor } from 'meteor/meteor';

export const saveProfile = (userId, profile) => {
  Meteor.users.update(userId, { $set: { username: profile.username } });
};

Meteor.methods({
  'profile.save': saveProfile,
});
