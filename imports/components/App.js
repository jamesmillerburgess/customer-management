import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import app from '../state/appReducer';
import './App.scss';
import NavConnect from './nav/nav/NavConnect';
import HomeConnect from '../components/pages/home/HomeConnect';
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
  return <HomeConnect {...props} />;
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
        <Route path="/" component={NavConnect} />
        {routes.map(renderRoute)}
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
