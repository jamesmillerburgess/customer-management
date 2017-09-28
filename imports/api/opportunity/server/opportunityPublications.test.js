import * as opportunity from './opportunityPublications';

describe('opportunity.user Meteor Publication', () => {
  it('throws without a user', () => {
    opportunity.userId = null;
    expect(() => opportunity.user()).toThrow();
  });
  it('does not throw if there is a user', () => {
    opportunity.userId = 'a';
    expect(() => opportunity.user()).not.toThrow();
  });
});
describe('opportunity.single Meteor Publication', () => {
  it('throws without a user', () => {
    opportunity.userId = null;
    expect(() => opportunity.single()).toThrow();
  });
  it('does not throw if there is a user', () => {
    opportunity.userId = 'a';
    expect(() => opportunity.single()).not.toThrow();
  });
});
