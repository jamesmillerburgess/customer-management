import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import app from '../state/appReducer';
import AppConnect from './AppConnect';
import './App.scss';

export const hasReduxDevTools = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(app, hasReduxDevTools());

const App = props => (
  <Provider store={store}>
    <AppConnect />
  </Provider>
);

export default App;
