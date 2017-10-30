import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n';
import thunk from 'redux-thunk';
import moment from 'moment';
import 'moment/locale/ko.js';

import app from '../state/appReducer';
import AppConnect from './AppConnect';
import './App.scss';
import translationsObject from '../i18n/translations';

// export const hasReduxDevTools = () =>
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' &&
//   window.__REDUX_DEVTOOLS_EXTENSION__();

// export const store = createStore(app, hasReduxDevTools());
moment.locale('en-us');

export const store = createStore(app, applyMiddleware(thunk));
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en-us'));

const App = props => (
  <Provider store={store}>
    <AppConnect />
  </Provider>
);

export default App;
