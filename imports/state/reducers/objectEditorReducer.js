import _ from 'lodash/fp';

import * as AT from '../actions/actionTypes';

export const objectEditor = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_OBJECT_EDITOR_PROP:
      return _.set(action.prop, action.value, state);
    default:
      return state;
  }
};
