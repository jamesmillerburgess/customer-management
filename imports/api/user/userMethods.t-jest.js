import { saveProfile } from './userMethods';
import { Meteor } from 'meteor/meteor';

import Teams from '../team/teamCollection';

describe('profile.save Method', () => {
  it('updates the user collection', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: {} }];
    saveProfile('a', { username: 'b' });
    expect(Meteor.users.update).lastCalledWith('a', {
      $set: { username: 'b' },
    });
  });
  it('picks the locale field from the profile', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: {} }];
    saveProfile('a', { profile: { locale: 'a' } });
    expect(Meteor.users.update).lastCalledWith('a', {
      $set: { 'profile.locale': 'a' },
    });
    saveProfile('a', { profile: {} });
    expect(Meteor.users.update).lastCalledWith('a', {
      $set: {},
    });
  });
  it('picks the avatarURL field from the profile', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: {} }];
    saveProfile('a', { avatarURL: 'a' });
    expect(Meteor.users.update).lastCalledWith('a', {
      $set: { 'profile.avatarURL': 'a' },
    });
  });
  it('adds the team member if the new team is different from the old', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: { team: '' } }];
    Teams.docs = [{ members: [''] }];
    saveProfile('a', { team: 'b' });
    expect(Meteor.users.update).toHaveBeenCalled();
  });
});
