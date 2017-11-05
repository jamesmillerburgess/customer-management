import * as pubs from './genericPublications';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import Teams from '../team/teamCollection';

describe('configurations.all Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['configurations.all']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['configurations.all']).not.toThrow();
  });
});
describe('contact.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['contact.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['contact.user']).not.toThrow();
  });
});
describe('company.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['company.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['company.user']).not.toThrow();
  });
});
describe('opportunity.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['opportunity.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['opportunity.user']).not.toThrow();
  });
});
describe('contact.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['contact.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['contact.single']('b')).not.toThrow();
  });
});
describe('company.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['company.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['company.single']('b')).not.toThrow();
  });
});
describe('opportunity.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['opportunity.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['opportunity.single']('b')).not.toThrow();
  });
});
describe('opportunity.team Meteor Publication', () => {
  it('returns an array of cursors if there is a team', () => {
    Teams.docs = [{ members: [] }];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Array'
    );
    Teams.docs = [{}];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Object'
    );
    Teams.docs = [];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Object'
    );
  });
});
describe('team.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['team.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['team.single']('b')).not.toThrow();
  });
});
describe('team.list Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['team.list']([])).not.toThrow();
  });
});
describe('user.single Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['user.single']('a')).not.toThrow();
  });
});
