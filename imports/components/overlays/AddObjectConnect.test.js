import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddObjectConnect, {
  mapStateToProps,
  mapDispatchToProps,
  create,
} from './AddObjectConnect';
import FieldLists from '../../api/fieldList/fieldListCollection';

describe('AddObjectConnect Component', () => {
  it('connects AddObjectDisplay', () => {
    expect(AddObjectConnect.displayName).toBe('Connect(AddObjectDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    FieldLists.docs = [{ page: '', fields: [{ name: 'a', default: '' }] }];
    const state = { overlay: {}, other: 'b' };
    const ownProps = {};
    expect(mapStateToProps(state, ownProps).fields[0].value).toBe('');
    state.overlay.a = 'b';
    expect(mapStateToProps(state, ownProps).fields[0].value).toBe('b');
  });
  it('assumes no fields if no FieldList is found', () => {
    FieldLists.docs = [];
    const state = { overlay: {}, other: 'b' };
    const ownProps = {};
    expect(mapStateToProps(state, ownProps).fields.length).toBe(0);
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
