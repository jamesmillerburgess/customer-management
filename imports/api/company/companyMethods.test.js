import { Mongo } from 'meteor/mongo';
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
    expect(() => company.addNote({})).not.toThrow();
  });
});
