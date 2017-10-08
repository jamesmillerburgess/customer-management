import Opportunities from './opportunityCollection';
import Companies from '../company/companyCollection';
import * as opportunity from './opportunityMethods';

describe('getStatusDirection Function', () => {
  it('returns STATUS_CHANGE_FORWARD if the status moves forward in sequence', () => {
    expect(
      opportunity.getStatusDirection(
        opportunity.STATUS_VALUES[0],
        opportunity.STATUS_VALUES[1]
      )
    ).toBe(opportunity.STATUS_CHANGE_FORWARD);
  });
  it('returns STATUS_CHANGE_BACKWARD if the status moves backward in sequence', () => {
    expect(
      opportunity.getStatusDirection(
        opportunity.STATUS_VALUES[1],
        opportunity.STATUS_VALUES[0]
      )
    ).toBe(opportunity.STATUS_CHANGE_BACKWARD);
  });
});
describe('opportunity.updateStatus Meteor Method', () => {
  it('does not throw with a valid opportunityId and status', () => {
    Opportunities.docs = [{}];
    expect(() =>
      opportunity.updateStatus('a', { status: 'b', id: 'c' })
    ).not.toThrow();
  });
  it('throws if opportunityId is not a string', () => {
    Opportunities.docs = [{ _id: 'a' }];
    expect(() =>
      opportunity.updateStatus(1, { status: 'b', id: 'c' })
    ).toThrow();
  });
  it('throws if there is no opportunity with the given id', () => {
    Opportunities.docs = [];
    expect(() =>
      opportunity.updateStatus('a', { status: 'b', id: 'c' })
    ).toThrow();
  });
  it('throws if the from and to statuses are the same', () => {
    Opportunities.docs = [{ status: 'b' }];
    expect(() =>
      opportunity.updateStatus('a', { status: 'b', id: 'c' })
    ).toThrow();
  });
  it('updates the company if there is one on the opportunity', () => {
    Opportunities.docs = [{ company: { _id: 'a' } }];
    expect(() =>
      opportunity.updateStatus('a', { status: 'b', id: 'c' })
    ).not.toThrow();
  });
});
