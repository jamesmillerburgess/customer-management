import OpportunitiesConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './OpportunitiesConnect';

describe('OpportunitiesConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(OpportunitiesConnect).toBeInstanceOf(Function);
  });
});
describe('matchStateToProps Function', () => {
  it('returns an empty object', () => {
    const state = { dataTables: { opportunity: { ownerFilter: 'a' } } };
    expect(mapStateToProps(state)).toEqual({ ownerFilter: 'a' });
    state.dataTables.opportunity.ownerFilter = null;
    expect(mapStateToProps(state)).toEqual({ ownerFilter: 'SELF' });
  });
});
describe('matchDispatchToProps Function', () => {
  it('returns the openOverlay function', () => {
    const dispatch = jest.fn();
    const ownProps = {};
    expect(mapDispatchToProps(dispatch, ownProps).openOverlay).not.toThrow();
  });
});
