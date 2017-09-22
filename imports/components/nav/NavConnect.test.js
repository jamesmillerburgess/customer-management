import NavConnect, { mapStateToProps, mapDispatchToProps } from './NavConnect';

describe('NavConnect Component', () => {
  it('connects NavDisplay', () => {
    expect(NavConnect.displayName).toBe('Connect(NavDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { login: 'a', other: 'b' };
    expect(mapStateToProps(state)).toEqual({ login: 'a' });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const props = mapDispatchToProps(() => null);
    expect(props.dispatchers.setUsername).not.toThrow();
    expect(props.dispatchers.setPassword).not.toThrow();
    expect(props.dispatchers.setPasswordAgain).not.toThrow();
  });
});
