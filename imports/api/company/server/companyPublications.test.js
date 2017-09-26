import * as company from './companyPublications';

describe('company.user Meteor Publication', () => {
  it('throws without a user', () => {
    company.userId = null;
    expect(() => company.user()).toThrow();
  });
  it('does not throw if there is a user', () => {
    company.userId = 'a';
    expect(() => company.user()).not.toThrow();
  });
});
describe('company.single Meteor Publication', () => {
  it('throws without a user', () => {
    company.userId = null;
    expect(() => company.single()).toThrow();
  });
  it('does not throw if there is a user', () => {
    company.userId = 'a';
    expect(() => company.single()).not.toThrow();
  });
});
