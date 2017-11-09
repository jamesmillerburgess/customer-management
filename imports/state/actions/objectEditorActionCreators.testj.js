import * as AC from './objectEditorActionCreators';
import * as AT from './actionTypes';

describe('setObjectEditorProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setObjectEditorProp('a', 2);
    expect(action).toEqual({
      type: AT.SET_OBJECT_EDITOR_PROP,
      prop: 'a',
      value: 2,
    });
  });
});
