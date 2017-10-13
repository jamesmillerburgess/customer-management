import { saveProfile } from './userMethods';
import { Meteor } from 'meteor/meteor';

describe('profile.save Method', () => {
  it('updates the user collection', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: {} }];
    saveProfile('a', { username: 'b' });
    expect(Meteor.users.update).toHaveBeenCalled();
  });
});
