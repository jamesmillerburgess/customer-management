import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Nav from './nav/Nav';
import routes from '../api/routes';

const App = props => (
  <BrowserRouter>
    <div className={props.appClass}>
      <Nav />
      {routes.map(({ path, component, exact }, index) => (
        <Route key={index} path={path} component={component} exact={exact} />
      ))}
    </div>
  </BrowserRouter>
);

export default App;
