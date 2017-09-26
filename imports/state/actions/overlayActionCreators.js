import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setOverlayProp = makeActionCreator(
  AT.SET_OVERLAY_PROP,
  'prop',
  'value'
);
