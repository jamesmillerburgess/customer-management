import * as AC from './loginActionCreators';
import * as AT from './actionTypes';

describe('setCompanyProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setCompanyProp('a', 2);
    expect(action).toEqual({ type: AT.SET_COMPANY_PROP, prop: 'a', value: 2 });
  });
});
