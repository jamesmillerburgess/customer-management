import * as AC from './appActionCreators';
import * as AT from './actionTypes';

describe('setAppProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setAppProp('a', 2);
    expect(action).toEqual({ type: AT.SET_APP_PROP, prop: 'a', value: 2 });
  });
});
