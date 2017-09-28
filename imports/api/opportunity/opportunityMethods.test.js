import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import Opportunities from './opportunityCollection';
import Companies from '../company/companyCollection';
import * as opportunity from './opportunityMethods';
import { STATUS_VALUES } from '../../components/fields/statusField/StatusField';

describe('opportunity.create Meteor Method', () => {
  it('inserts a document', () => {
    Opportunities.num = 0;
    opportunity.create({ name: 'a' });
    expect(Opportunities.num).toBe(1);
  });
  it('throws without a name', () => {
    expect(() => opportunity.create()).toThrow();
    expect(() => opportunity.create({})).toThrow();
    expect(() => opportunity.create({ name: null })).toThrow();
    expect(() => opportunity.create({ name: '' })).toThrow();
  });
});
describe('getStatusDirection Function', () => {
  it('returns STATUS_CHANGE_FORWARD if the status moves forward in sequence', () => {
    expect(
      opportunity.getStatusDirection(STATUS_VALUES[0], STATUS_VALUES[1])
    ).toBe(opportunity.STATUS_CHANGE_FORWARD);
  });
  it('returns STATUS_CHANGE_BACKWARD if the status moves backward in sequence', () => {
    expect(
      opportunity.getStatusDirection(STATUS_VALUES[1], STATUS_VALUES[0])
    ).toBe(opportunity.STATUS_CHANGE_BACKWARD);
  });
});
describe('opportunity.setStatus Meteor Method', () => {
  it('does not throw with a valid opportunityId and status', () => {
    Opportunities.docs = [{}];
    expect(() => opportunity.setStatus('a', 'b')).not.toThrow();
  });
  it('throws if opportunityId is not a string', () => {
    Opportunities.docs = [{ _id: 'a' }];
    expect(() => opportunity.setStatus(1, 'b')).toThrow();
  });
  it('throws if there is no opportunity with the given id', () => {
    Opportunities.docs = [];
    expect(() => opportunity.setStatus('a', 'b')).toThrow();
  });
  it('throws if the from and to statuses are the same', () => {
    Opportunities.docs = [{ status: 'b' }];
    expect(() => opportunity.setStatus('a', 'b')).toThrow();
  });
  it('updates the company if there is one on the opportunity', () => {
    Opportunities.docs = [{ company: { _id: 'a' } }];
    expect(() => opportunity.setStatus('a', 'b')).not.toThrow();
  });
});
