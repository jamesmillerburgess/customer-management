import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

import * as reducers from './reducers/reducers';

const app = combineReducers({ ...reducers, i18n: i18nReducer });

export default app;
