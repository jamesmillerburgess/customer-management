import { app } from './appReducer';
import * as AT from '../actions/actionTypes';

describe('app Reducer', () => {
  it('returns app state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(app(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(app(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_APP_PROP, prop: 'a', value: 'b' };
    expect(app({}, action).a).toBe('b');
  });
});
