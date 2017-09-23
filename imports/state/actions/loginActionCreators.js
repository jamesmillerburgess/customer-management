import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setLoginProp = makeActionCreator(
  AT.SET_LOGIN_PROP,
  'prop',
  'value'
);
