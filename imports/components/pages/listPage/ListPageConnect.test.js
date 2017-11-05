import ListPageConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ListPageConnect';

describe('ListPageConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(ListPageConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps state to props', () => {
    const state = {
      dataTables: { c: { ownerFilter: 'a', pageNumber: 1 } },
      other: 'b',
    };
    const ownProps = { tableId: 'c' };
    expect(mapStateToProps(state, ownProps)).toEqual({
      ownerFilter: 'a',
      pageNumber: 1,
    });
    state.dataTables.c = {};
    expect(mapStateToProps(state, ownProps)).toEqual({
      ownerFilter: undefined,
      pageNumber: 0,
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers to props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch, { overlay: 'a' });
    expect(props.openOverlay).not.toThrow();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
