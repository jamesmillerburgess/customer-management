import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setObjectEditorProp = makeActionCreator(
  AT.SET_OBJECT_EDITOR_PROP,
  'prop',
  'value'
);
