import * as AC from './subscriptionsActionCreator';
import * as AT from './actionTypes';

describe('setSubscriptionsProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setSubscriptionsProp('a', 2);
    expect(action).toEqual({
      type: AT.SET_SUBSCRIPTIONS_PROP,
      prop: 'a',
      value: 2,
    });
  });
});
