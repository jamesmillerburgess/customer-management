import React from 'react';
import { Meteor } from 'meteor/meteor';

import { NavLink } from 'react-router-dom';
import routes from '../../../api/routes';
import './NavDisplay.scss';
import NavSearchInput from '../../fields/NavSearchInput';

const NavDisplay = props => (
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
      <div>
        <button
          id="profile-button"
          className="nav-button"
          onClick={() =>
            props.user
              ? props.setIsProfileMenuOpen(!props.isProfileMenuOpen)
              : null}
        >
          {props.user ? (
            <div className="profile-button-text">
              <div className="username">{props.user.username} </div>
              <div className="team-name">{props.team && props.team.name}</div>
            </div>
          ) : (
            'Log in'
          )}
        </button>
        <div
          id="profile-menu"
          className={`profile-menu ${props.isProfileMenuOpen ? 'open' : ''}`}
        >
          <div className="nav-name">
            <img className="nav-avatar" src="/empty-profile-pic.png" />
            {props.user ? props.user.username : ''}
          </div>
          <hr />
          <ul>
            <li>
              <a href="#" onClick={props.goToProfile}>
                Edit profile
              </a>
            </li>
            <li>
              <a href="#" onClick={props.tryLogout}>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default NavDisplay;
