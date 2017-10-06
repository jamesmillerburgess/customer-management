import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddContactConnect, {
  mapStateToProps,
  mapDispatchToProps,
  create,
} from './AddContactConnect';

describe('AddContactConnect Component', () => {
  it('connects AddObjectDisplay', () => {
    expect(AddContactConnect.displayName).toBe('Connect(AddObjectDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { overlay: {}, other: 'b' };
    expect(mapStateToProps(state)).toEqual({
      company: null,
      email: '',
      name: '',
    });
    state.overlay.company = 'a';
    state.overlay.email = 'b';
    state.overlay.name = 'c';
    expect(mapStateToProps(state)).toEqual({
      company: 'a',
      email: 'b',
      name: 'c',
    });
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
