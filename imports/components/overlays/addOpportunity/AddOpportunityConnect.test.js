import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddOpportunityConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './AddOpportunityConnect';

describe('AddOpportunityConnect Component', () => {
  it('connects AddObjectDisplay', () => {
    expect(AddOpportunityConnect.displayName).toBe('Connect(AddObjectDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { overlay: {}, other: 'b' };
    expect(() => mapStateToProps(state)).not.toThrow();
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(() => null, ownProps);
    Meteor.err = null;
    Meteor._methods['company.create'] = jest.fn();
    expect(props.setProp).not.toThrow();
    expect(props.closeOverlay).not.toThrow();
    expect(props.create).not.toThrow();
  });
  it('handles errors', () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(() => null, ownProps);
    Meteor.err = 'err';
    expect(props.create).not.toThrow();
  });
});
