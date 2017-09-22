import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import routes from '../../api/routes';
import './NavDisplay.scss';
import NavSearchInput from '../fields/NavSearchInput';

const NavInner = props => (
  <div className="nav">
    <div className="button-group">
      {routes
        .filter(route => route.isNavLink)
        .map(({ path, title, exact, className }, index) => (
          <NavLink key={index} to={path} className={className} exact={exact}>
            <span className="nav-button">{title}</span>
          </NavLink>
        ))}
    </div>
    <div className="button-group">
      <NavSearchInput placeholder="Search" />
      <button
        className="nav-button"
        onClick={() => props.setIsProfileMenuOpen(!props.isProfileMenuOpen)}
      >
        {props.user ? props.user.username : 'Log in'}
        <div
          className={`profile-menu ${props.isProfileMenuOpen ? 'open' : ''}`}
        >
          <div className="nav-name">
            <img className="nav-avatar" src="/empty-profile-pic.png" />
            {props.user ? props.user.username : ''}
          </div>
          <hr />
          <ul>
            <li>
              <a onClick={props.goToProfile}>Edit profile</a>
            </li>
            <li>
              <a onClick={props.tryLogout}>Log out</a>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </div>
);

const NavDisplay = createContainer(props => {
  const user = Meteor.user();
  const tryLogout = () => {
    Meteor.logout((err, res) => props.history.push('/'));
  };
  return { ...props, user, tryLogout };
}, NavInner);

export default NavDisplay;
