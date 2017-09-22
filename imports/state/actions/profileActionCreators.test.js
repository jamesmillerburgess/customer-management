import * as AC from './profileActionCreators';
import * as AT from './actionTypes';

describe('setProfileProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setProfileProp('a', 2);
    expect(action).toEqual({ type: AT.SET_PROFILE_PROP, prop: 'a', value: 2 });
  });
});
