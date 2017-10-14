import { saveProfile } from './userMethods';
import { Meteor } from 'meteor/meteor';

import Teams from '../team/teamCollection';

describe('profile.save Method', () => {
  it('updates the user collection', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: {} }];
    saveProfile('a', { username: 'b' });
    expect(Meteor.users.update).toHaveBeenCalled();
  });
  it('adds the team member if the new team is different from the old', () => {
    Meteor.users.update = jest.fn();
    Meteor.users.docs = [{ profile: { team: '' } }];
    Teams.docs = [{ members: [''] }];
    saveProfile('a', { team: 'b' });
    expect(Meteor.users.update).toHaveBeenCalled();
  });
});
