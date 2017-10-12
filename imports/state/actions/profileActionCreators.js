import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setProfileProp = makeActionCreator(
  AT.SET_PROFILE_PROP,
  'prop',
  'value'
);
export const setProfileArrayElem = makeActionCreator(
  AT.SET_PROFILE_ARRAY_ELEM,
  'prop',
  'index',
  'value'
);
