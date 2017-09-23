import { saveProfile } from './userMethods';
import { Meteor } from 'meteor/meteor';

describe('profile.save Method', () => {
  it('updates the user collection', () => {
    Meteor.users.update = jest.fn();
    saveProfile('a', { username: 'b' });
    expect(Meteor.users.update).toHaveBeenCalled();
  });
});
