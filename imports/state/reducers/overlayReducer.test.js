import { overlay } from './overlayReducer';
import * as AT from '../actions/actionTypes';

describe('overlay Reducer', () => {
  it('returns overlay state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(overlay(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(overlay(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_OVERLAY_PROP, prop: 'a', value: 'b' };
    expect(overlay({}, action).a).toBe('b');
  });
});
