import { filters } from './filtersReducer';
import * as AT from '../actions/actionTypes';

describe('filters Reducer', () => {
  it('returns filters state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(filters(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(filters(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_FILTERS_PROP, prop: 'a', value: 'b' };
    expect(filters({}, action).a).toBe('b');
  });
});
