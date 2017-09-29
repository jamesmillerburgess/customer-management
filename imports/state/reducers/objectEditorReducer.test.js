import { objectEditor } from './objectEditorReducer';
import * as AT from '../actions/actionTypes';

describe('objectEditor Reducer', () => {
  it('defaults state to an empty object', () => {
    expect(objectEditor()).toEqual({});
  });
  it('returns objectEditor state if the action type is not applicable', () => {
    const action = { type: 'NOT_APPLICABLE' };
    const state = { a: 'b' };
    expect(objectEditor(state, action)).toBe(state);
  });
  it('returns state if no action is passed', () => {
    const state = { a: 'b' };
    expect(objectEditor(state)).toBe(state);
  });
  it('sets the specified property to the specified value', () => {
    const action = { type: AT.SET_OBJECT_EDITOR_PROP, prop: 'a', value: 'b' };
    expect(objectEditor({}, action).a).toBe('b');
  });
});
