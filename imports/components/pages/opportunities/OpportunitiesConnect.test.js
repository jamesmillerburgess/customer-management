import OpportunitiesConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './OpportunitiesConnect';

describe('OpportunitiesConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(OpportunitiesConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps state to props', () => {
    const state = { other: 'b' };
    expect(mapStateToProps(state)).toEqual({});
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers to props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props.openOverlay).not.toThrow();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
