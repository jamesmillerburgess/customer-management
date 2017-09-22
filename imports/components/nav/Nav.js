import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import routes from '../../api/routes';
import './Nav.scss';
import NavSearchInput from '../fields/NavSearchInput';

const NavInner = props => (
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
      <button className="nav-button" onClick={props.tryLogout}>
        {props.user ? props.user.username : 'Log in'}
      </button>
    </div>
  </div>
);

const Nav = createContainer(props => {
  const user = Meteor.user();
  const tryLogout = () => {
    Meteor.logout((err, res) => props.history.push('/'));
  };
  return { ...props, user, tryLogout };
}, NavInner);

export default Nav;
