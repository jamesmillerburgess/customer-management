import ProfileConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ProfileConnect';

import { Meteor } from '../../../meteorMocks';

describe('ProfileConnect Component', () => {
  it('connects ProfileDisplayInner', () => {
    expect(ProfileConnect.displayName).toBe('Connect(ProfileDisplayInner)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps profile state', () => {
    const state = { profile: {}, other: 'b' };
    Meteor.isLoggingIn = true;
    expect(mapStateToProps(state)).toEqual({ username: '', hasLoaded: false });
    state.profile.username = 'a';
    state.profile.hasLoaded = true;
    expect(mapStateToProps(state)).toEqual({ username: 'a', hasLoaded: true });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps profile dispatchers', () => {
    const props = mapDispatchToProps(() => null);
    expect(props.setUsername).not.toThrow();
    expect(props.saveProfile).not.toThrow();
    expect(props.setHasLoaded).not.toThrow();
  });
});
