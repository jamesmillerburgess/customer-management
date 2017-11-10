import * as AC from './overlayActionCreators';
import * as AT from './actionTypes';

describe('setOverlayProp Action Creator', () => {
  it('creates the action', () => {
    const action = AC.setOverlayProp('a', 2);
    expect(action).toEqual({ type: AT.SET_OVERLAY_PROP, prop: 'a', value: 2 });
  });
});
