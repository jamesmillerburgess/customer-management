import { dataTables } from './dataTablesReducer';
import * as AT from '../actions/actionTypes';

describe('dataTables Reducer', () => {
  it('returns dataTables state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(dataTables(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(dataTables(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_DATA_TABLES_PROP, prop: 'a', value: 'b' };
    expect(dataTables({}, action).a).toBe('b');
  });
});
