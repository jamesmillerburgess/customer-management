import * as pubs from './genericPublications';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

describe('configurations.all Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['configurations.all']).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['configurations.all']).not.toThrow();
  });
});
describe('contact.user Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['contact.user']).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['contact.user']).not.toThrow();
  });
});
describe('company.user Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['company.user']).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['company.user']).not.toThrow();
  });
});
describe('opportunity.user Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['opportunity.user']).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['opportunity.user']).not.toThrow();
  });
});
describe('contact.single Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['contact.single']('b')).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['contact.single']('b')).not.toThrow();
  });
});
describe('company.single Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['company.single']('b')).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['company.single']('b')).not.toThrow();
  });
});
describe('opportunity.single Meteor Publication', () => {
  it('throws without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['opportunity.single']('b')).toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['opportunity.single']('b')).not.toThrow();
  });
});
