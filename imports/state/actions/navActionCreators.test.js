import * as AC from './navActionCreators';
import * as AT from './actionTypes';

describe('setNavProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setNavProp('a', 2);
    expect(action).toEqual({ type: AT.SET_NAV_PROP, prop: 'a', value: 2 });
  });
});
