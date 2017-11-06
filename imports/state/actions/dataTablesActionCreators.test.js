import * as AC from './dataTablesActionCreators';
import * as AT from './actionTypes';

describe('setDataTablesProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setDataTablesProp('a', 2);
    expect(action).toEqual({
      type: AT.SET_DATA_TABLES_PROP,
      prop: 'a',
      value: 2,
    });
  });
});
