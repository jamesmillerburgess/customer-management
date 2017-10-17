import * as AT from './actionTypes';
import { makeActionCreator } from './actionUtils';

export const setSubscriptionsProp = makeActionCreator(
  AT.SET_SUBSCRIPTIONS_PROP,
  'prop',
  'value'
);
