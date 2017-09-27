import _ from 'lodash/fp';

import * as AT from '../actions/actionTypes';

export const overlay = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_OVERLAY_PROP:
      return _.set(action.prop, action.value, state);
    case AT.SET_OVERLAY_PROPS:
      const keys = _.omit('action', Object.keys(action));
      return keys.reduce((prev, key) => _.set(key, action[key], prev), state);
    case AT.CLEAR_OVERLAY_PROPS:
      return {};
    default:
      return state;
  }
};
