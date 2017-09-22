import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Nav from './nav/Nav';
import Home from '../components/pages/Home';
import routes from '../api/routes';

export const verifyAuth = (component, props) => {
  if (Meteor.user() || Meteor.loggingIn()) {
    return React.createElement(component, props);
  }
  return <Home />;
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
  <BrowserRouter>
    <div className={props.appClass}>
      <Nav />
      {routes.map(renderRoute)}
    </div>
  </BrowserRouter>
);

export default App;
