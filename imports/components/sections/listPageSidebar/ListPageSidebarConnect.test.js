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
    const state = { dataTables: { c: { ownerFilter: 'b' } } };
    const ownProps = { match: { path: 'a' }, tableId: 'c' };
    expect(mapStateToProps(state, ownProps).ownerFilter).toBe('b');
    state.dataTables.c.ownerFilter = undefined;
    expect(mapStateToProps(state, ownProps).ownerFilter).toBe('SELF');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { path: 'a' } };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setOwnerFilter).not.toThrow();
  });
});
