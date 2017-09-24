import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setCompanyProp = makeActionCreator(
  AT.SET_COMPANY_PROP,
  'prop',
  'value'
);
