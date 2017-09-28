import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import Companies from './companyCollection';
import * as company from './companyMethods';

describe('company.create Meteor Method', () => {
  it('inserts a document', () => {
    Companies.num = 0;
    company.create({ name: 'a' });
    expect(Companies.num).toBe(1);
  });
  it('throws without a name', () => {
    expect(() => company.create()).toThrow();
    expect(() => company.create({})).toThrow();
    expect(() => company.create({ name: null })).toThrow();
    expect(() => company.create({ name: '' })).toThrow();
  });
});
describe('company.save Meteor Method', () => {
  it('does not throw', () => {
    expect(() => company.save({})).not.toThrow();
  });
});
describe('company.addNote Meteor Method', () => {
  it('does not throw', () => {
    Meteor.users.docs = [{}];
    expect(() => company.addNote('a', {})).not.toThrow();
  });
  it('throws if companyId is not a string', () => {
    expect(() => company.addNote(1, {})).toThrow();
  });
});
describe('company.search Meteor Method', () => {
  it('does not throw', () => {
    expect(company.search).not.toThrow();
  });
  it('throws if search is not a string', () => {
    expect(() => company.search(1)).toThrow();
  });
});
