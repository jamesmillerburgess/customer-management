import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setDataTablesProp = makeActionCreator(
  AT.SET_DATA_TABLES_PROP,
  'prop',
  'value'
);
