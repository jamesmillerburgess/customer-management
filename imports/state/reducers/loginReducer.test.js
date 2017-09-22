import { login } from './loginReducer';
import * as AT from '../actions/actionTypes';

describe('login reducer', () => {
  it('returns login state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(login(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(login(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_LOGIN_PROP, prop: 'a', value: 'b' };
    expect(login({}, action).a).toBe('b');
  });
});
