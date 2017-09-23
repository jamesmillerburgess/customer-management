import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomeConnect from './pages/home/HomeConnect';
import NavConnect from './nav/nav/NavConnect';
import routes from '../api/routes';

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

const AppDisplay = props => (
  <BrowserRouter>
    <div className={props.isOverlayOpen ? 'blur' : ''}>
      <Route path="/" component={NavConnect} />
      {routes.map(renderRoute)}
    </div>
  </BrowserRouter>
);

export default AppDisplay;
