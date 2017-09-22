import HomeConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './HomeConnect';

describe('HomeConnect Component', () => {
  it('connects HomeDisplay', () => {
    expect(HomeConnect.displayName).toBe('Connect(HomeDisplay)');
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
