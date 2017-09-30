import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomeConnect from './pages/home/HomeConnect';
import NavConnect from './nav/nav/NavConnect';
import AddCompanyConnect from './overlays/addCompany/AddCompanyConnect';
import AddOpportunityConnect from './overlays/addOpportunity/AddOpportunityConnect';
import routes from '../api/routes';
import * as fields from './overlays/AddObjectConstants';

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
  ADD_COMPANY: 'ADD_COMPANY',
  ADD_OPPORTUNITY: 'ADD_OPPORTUNITY',
};

export const Overlays = ({ open, type }) => (
  <div className={`overlay-background ${open ? 'show' : ''}`}>
    <Route
      path="/"
      render={routeProps => (
        <AddCompanyConnect
          {...routeProps}
          show={type === OT.ADD_COMPANY}
          fields={fields.addCompanyFields}
          label="company"
        />
      )}
    />
    <Route
      path="/"
      render={routeProps => (
        <AddOpportunityConnect
          {...routeProps}
          show={type === OT.ADD_OPPORTUNITY}
          fields={fields.addOpportunityFields}
          label="opportunity"
        />
      )}
    />
  </div>
);

const AppDisplay = props => (
  <BrowserRouter>
    <div>
      <div className={`app ${props.isOverlayOpen ? 'blur' : ''}`}>
        <Route path="/" component={NavConnect} />
        {routes.map(renderRoute)}
      </div>
      <Overlays type={props.overlay} open={props.isOverlayOpen} />
    </div>
  </BrowserRouter>
);

export default AppDisplay;
