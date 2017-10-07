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
  it('pulls in objectEditor properties', () => {
    const state = {
      objectEditor: { hasLoaded: true, loadedValues: { a: 'a' } },
    };
    expect(mapStateToProps(state)).toEqual({
      hasLoaded: true,
      loadedValues: { a: 'a' },
    });
  });
  it('uses defaults if the properties are missing from the state', () => {
    const state = { objectEditor: {} };
    expect(mapStateToProps(state)).toEqual({
      hasLoaded: false,
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
