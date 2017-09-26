import { company } from './companyReducer';
import * as AT from '../actions/actionTypes';

describe('company Reducer', () => {
  it('returns company state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(company(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(company(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_COMPANY_PROP, prop: 'a', value: 'b' };
    expect(company({}, action).a).toBe('b');
  });
});
