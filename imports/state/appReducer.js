import { combineReducers } from 'redux';

import * as reducers from './reducers/reducers';

const app = combineReducers(reducers);

export default app;
