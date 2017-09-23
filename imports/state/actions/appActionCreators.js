import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setAppProp = makeActionCreator(AT.SET_APP_PROP, 'prop', 'value');
