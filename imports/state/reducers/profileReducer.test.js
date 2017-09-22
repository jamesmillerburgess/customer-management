import { profile } from './profileReducer';
import * as AT from '../actions/actionTypes';

describe('profile Reducer', () => {
  it('returns profile state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(profile(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(profile(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_PROFILE_PROP, prop: 'a', value: 'b' };
    expect(profile({}, action).a).toBe('b');
  });
});
