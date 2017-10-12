import _ from 'lodash/fp';

import * as AT from '../actions/actionTypes';

export const profile = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_PROFILE_PROP:
      return _.set(action.prop, action.value, state);
    case AT.SET_PROFILE_ARRAY_ELEM:
      return _.set(
        action.prop,
        _.set(action.index, action.value, state[action.prop] || []),
        state
      );
    default:
      return state;
  }
};
