import ProfileConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ProfileConnect';

describe('ProfileConnect Component', () => {
  it('connects ProfileDisplay', () => {
    expect(ProfileConnect.displayName).toBe('Connect(ProfileDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps profile state', () => {
    const state = { profile: 'a', other: 'b' };
    expect(mapStateToProps(state)).toEqual({ profile: 'a' });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps profile dispatchers', () => {
    const props = mapDispatchToProps(() => null);
    expect(props.dispatchers.setUsername).not.toThrow();
  });
});
