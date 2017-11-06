import * as AC from './filtersActionCreators';
import * as AT from './actionTypes';

describe('setFiltersProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setFiltersProp('a', 2);
    expect(action).toEqual({ type: AT.SET_FILTERS_PROP, prop: 'a', value: 2 });
  });
});
