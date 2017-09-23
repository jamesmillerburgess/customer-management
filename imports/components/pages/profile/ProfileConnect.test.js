import ProfileConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ProfileConnect';

import { Meteor } from 'meteor/meteor';

describe('ProfileConnect Component', () => {
  it('returns a function', () => {
    expect(ProfileConnect).toBeInstanceOf(Function);
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
