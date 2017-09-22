import { nav } from './navReducer';
import * as AT from '../actions/actionTypes';

describe('nav reducer', () => {
  it('returns state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(nav(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(nav(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_NAV_PROP, prop: 'a', value: 'b' };
    expect(nav({}, action).a).toBe('b');
  });
});
