import NavConnect, { mapStateToProps, mapDispatchToProps } from './NavConnect';

describe('NavConnect Component', () => {
  it('connects NavInner', () => {
    expect(NavConnect.displayName).toBe('Connect(NavInner)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { nav: {}, other: 'b' };
    expect(mapStateToProps(state)).toEqual({ isProfileMenuOpen: false });
    state.nav.isProfileMenuOpen = true;
    expect(mapStateToProps(state)).toEqual({ isProfileMenuOpen: true });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const props = mapDispatchToProps(() => null, {
      history: { push: jest.fn() },
    });
    expect(props.setIsProfileMenuOpen).not.toThrow();
    expect(props.goToProfile).not.toThrow();
  });
});
