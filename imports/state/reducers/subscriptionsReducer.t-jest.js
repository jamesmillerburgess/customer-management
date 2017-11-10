import { subscriptions } from './subscriptionsReducer';
import * as AT from '../actions/actionTypes';

describe('subscriptions Reducer', () => {
  it('returns subscriptions state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(subscriptions(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(subscriptions(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_SUBSCRIPTIONS_PROP, prop: 'a', value: 'b' };
    expect(subscriptions({}, action).a).toBe('b');
  });
});
