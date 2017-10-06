import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import Contacts from './contactCollection';
import * as contact from './contactMethods';

describe('contact.create Meteor Method', () => {
  it('inserts a document', () => {
    Contacts.num = 0;
    contact.create({ name: 'a' });
    expect(Contacts.num).toBe(1);
  });
  it('throws without a name', () => {
    expect(() => contact.create()).toThrow();
    expect(() => contact.create({})).toThrow();
    expect(() => contact.create({ name: null })).toThrow();
    expect(() => contact.create({ name: '' })).toThrow();
  });
});
describe('contact.saveProperties Meteor Method', () => {
  it('does not throw', () => {
    Contacts.docs = [{}];
    expect(() => contact.saveProperties('a', {})).not.toThrow();
  });
});
describe('contact.addNote Meteor Method', () => {
  it('does not throw', () => {
    Meteor.users.docs = [{}];
    expect(() => contact.addNote('a', {})).not.toThrow();
  });
  it('throws if contactId is not a string', () => {
    expect(() => contact.addNote(1, {})).toThrow();
  });
});
describe('contact.search Meteor Method', () => {
  it('does not throw', () => {
    expect(contact.search).not.toThrow();
  });
  it('throws if search is not a string', () => {
    expect(() => contact.search(1)).toThrow();
  });
});
