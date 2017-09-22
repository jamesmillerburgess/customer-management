import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import app from '../state/appReducer';
import './App.scss';
import Nav from './nav/Nav';
import HomeConnect from '../components/pages/HomeConnect';
import routes from '../api/routes';

export const hasReduxDevTools = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(app, hasReduxDevTools());

export const verifyAuth = (component, props) => {
  if (Meteor.user() || Meteor.loggingIn()) {
    return React.createElement(component, props);
  }
  return <HomeConnect />;
};

export const renderRoute = ({ path, component, exact }, index) => (
  <Route
    key={index}
    path={path}
    exact={exact}
    render={routeProps => verifyAuth(component, routeProps)}
  />
);

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={props.appClass}>
        <Nav />
        {routes.map(renderRoute)}
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
