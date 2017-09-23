import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setNavProp = makeActionCreator(AT.SET_NAV_PROP, 'prop', 'value');
