import CompaniesConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './CompaniesConnect';

describe('CompaniesConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(CompaniesConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { app: {}, other: 'b' };
    expect(mapStateToProps(state)).toEqual({});
    state.app.isOverlayOpen = true;
    expect(mapStateToProps(state)).toEqual({});
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props.openOverlay).not.toThrow();
  });
});
