import { Meteor } from 'meteor/meteor';
import ListPageSidebarConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ListPageSidebarConnect';

describe('ListPageSidebarConnect Component', () => {
  it('returns a function', () => {
    expect(ListPageSidebarConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('selects the filter based on the match path', () => {
    const state = { filters: { a: 'b' } };
    const ownProps = { match: { path: 'a' } };
    expect(mapStateToProps(state, ownProps).filter).toBe('b');
    state.filters.a = undefined;
    expect(mapStateToProps(state, ownProps).filter).toBe('');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { path: 'a' } };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setFilter).not.toThrow();
  });
});
