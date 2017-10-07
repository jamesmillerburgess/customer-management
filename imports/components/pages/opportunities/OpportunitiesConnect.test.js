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
    expect(mapStateToProps()).toEqual({});
  });
});
describe('matchDispatchToProps Function', () => {
  it('returns the openOverlay function', () => {
    const dispatch = jest.fn();
    const ownProps = {};
    expect(mapDispatchToProps(dispatch, ownProps).openOverlay).not.toThrow();
  });
});
