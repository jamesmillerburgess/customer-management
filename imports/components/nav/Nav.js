import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../api/routes';
import './Nav.scss';
import NavSearchInput from '../fields/NavSearchInput';

const Nav = () => (
  <div className="nav">
    <div className="button-group">
      {routes.map(({ path, title, exact, className }, index) => (
        <NavLink key={index} to={path} className={className} exact={exact}>
          <span className="nav-button">{title}</span>
        </NavLink>
      ))}
    </div>
    <div className="button-group">
      <NavSearchInput placeholder="Search" />
      <button className="nav-button">James Burgess</button>
    </div>
  </div>
);

export default Nav;
