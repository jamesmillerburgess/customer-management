import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setFiltersProp = makeActionCreator(
  AT.SET_FILTERS_PROP,
  'prop',
  'value'
);
