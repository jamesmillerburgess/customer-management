import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddCompanyConnect, {
  mapStateToProps,
  mapDispatchToProps,
  create,
} from './AddCompanyConnect';
import FieldLists from '../../../api/fieldList/fieldListCollection';

describe('AddCompanyConnect Component', () => {
  it('connects AddObjectDisplay', () => {
    expect(AddCompanyConnect.displayName).toBe('Connect(AddObjectDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    FieldLists.docs = [{ page: '', fields: [{ name: 'a', default: '' }] }];
    const state = { overlay: {}, other: 'b' };
    expect(mapStateToProps(state).fields[0].value).toBe('');
    state.overlay.a = 'b';
    expect(mapStateToProps(state).fields[0].value).toBe('b');
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
