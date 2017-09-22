import _ from 'lodash/fp';

import * as AT from '../actions/actionTypes';

export const nav = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_NAV_PROP:
      return _.set(action.prop, action.value, state);
    default:
      return state;
  }
};
