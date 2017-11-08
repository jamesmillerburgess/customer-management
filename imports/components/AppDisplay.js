import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomeConnect from './pages/home/HomeConnect';
import NavConnect from './nav/nav/NavConnect';
import AddObjectConnect from './overlays/AddObjectConnect';
import routes, { overlayRoutes } from '../api/routes';
import * as fields from './overlays/AddObjectConstants';
import SubscriptionManager from './app/subscriptionManager/SubscriptionManagerConnect';

export const verifyAuth = (component, props) => {
  if (Meteor.user() || Meteor.loggingIn()) {
    return React.createElement(component, props);
  }
  return <HomeConnect {...props} />;
};

export const renderRoute = (
  { path, component, exact, overlay, props },
  index
) => (
  <Route
    key={index}
    path={path}
    exact={exact}
    render={routeProps =>
      verifyAuth(component, { ...routeProps, overlay, ...props })}
  />
);

export const OT = {
  ADD_CONTACT: 'ADD_CONTACT',
  ADD_COMPANY: 'ADD_COMPANY',
  ADD_OPPORTUNITY: 'ADD_OPPORTUNITY',
};

export const Overlays = ({ open, type }) => (
  <div className={`overlay-background ${open ? 'show' : ''}`}>
    {overlayRoutes.map(overlayRoute => (
      <Route
        key={overlayRoute.pathPrefix}
        path="/"
        render={routeProps => (
          <AddObjectConnect
            {...routeProps}
            {...overlayRoute}
            show={type === overlayRoute.page}
            open={open}
            label={overlayRoute.pathPrefix}
            confirmLabel={overlayRoute.confirmLabel}
          />
        )}
      />
    ))}
  </div>
);

const AppDisplay = props => (
  <BrowserRouter>
    <div>
      {props.loading ? null : <SubscriptionManager />}
      <div className={`app ${props.isOverlayOpen ? 'blur' : ''}`}>
        <Route path="/" component={NavConnect} />
        {routes.map(renderRoute)}
      </div>
      <Overlays type={props.overlay} open={props.isOverlayOpen} />
    </div>
  </BrowserRouter>
);

export default AppDisplay;
