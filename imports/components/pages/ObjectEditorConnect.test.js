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
  it('returns an empty object', () => {
    const state = { a: 'b' };
    expect(mapStateToProps(state)).toEqual({});
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
