import * as AC from './loginActionCreators';
import * as AT from './actionTypes';

describe('setLoginProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setLoginProp('a', 2);
    expect(action).toEqual({ type: AT.SET_LOGIN_PROP, prop: 'a', value: 2 });
  });
});
