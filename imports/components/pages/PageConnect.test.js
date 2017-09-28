import PageConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './PageConnect';

describe('PageConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(PageConnect).toBeInstanceOf(Function);
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
    const props = mapDispatchToProps(dispatch, { overlay: 'a' });
    expect(props.openOverlay).not.toThrow();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
