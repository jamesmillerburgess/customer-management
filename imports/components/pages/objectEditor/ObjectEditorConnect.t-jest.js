import { Meteor } from 'meteor/meteor';
import ObjectEditorConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ObjectEditorConnect';

describe('ObjectEditorConnect Component', () => {
  it('returns a function', () => {
    expect(ObjectEditorConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('pulls in app and objectEditor properties', () => {
    const state = {
      app: { loading: false },
      objectEditor: {
        hasLoaded: true,
        loadedValues: { a: 'a' },
        avatarURL: 'a',
      },
    };
    expect(mapStateToProps(state)).toEqual({
      loading: false,
      hasLoaded: true,
      avatarURL: 'a',
      loadedValues: { a: 'a' },
    });
  });
  it('uses defaults if the properties are missing from the state', () => {
    const state = { app: {}, objectEditor: {} };
    const ownProps = { avatarURL: 'a' };
    expect(mapStateToProps(state, ownProps)).toEqual({
      loading: true,
      hasLoaded: false,
      avatarURL: 'a',
      loadedValues: {},
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { companyId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setProperty).not.toThrow();
    expect(props.setHasLoaded).not.toThrow();
    expect(props.setLoadedValues).not.toThrow();
  });
});
