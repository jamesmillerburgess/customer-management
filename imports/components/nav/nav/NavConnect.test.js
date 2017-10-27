import NavConnect, { mapStateToProps, mapDispatchToProps } from './NavConnect';

describe('NavConnect Component', () => {
  it('connects NavInner', () => {
    expect(NavConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { nav: {}, other: 'b' };
    expect(mapStateToProps(state)).toEqual({
      isHamburgerOpen: false,
      isProfileMenuOpen: false,
    });
    state.nav.isHamburgerOpen = true;
    state.nav.isProfileMenuOpen = true;
    expect(mapStateToProps(state)).toEqual({
      isHamburgerOpen: true,
      isProfileMenuOpen: true,
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const e = { preventDefault: jest.fn() };
    const props = mapDispatchToProps(() => null, {
      history: { push: jest.fn() },
    });
    expect(props.setIsHamburgerOpen).not.toThrow();
    expect(props.setIsProfileMenuOpen).not.toThrow();
    expect(() => props.goToProfile(e)).not.toThrow();
    expect(() => props.tryLogout(e)).not.toThrow();
  });
});
