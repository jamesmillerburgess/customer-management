import React from 'react';
import { Meteor } from 'meteor/meteor';

import { NavLink, Switch, Route } from 'react-router-dom';
import routes from '../../../api/routes';
import './NavDisplay.scss';
import NavSearchInput from '../../fields/NavSearchInput';

export const getPageTitle = () => (
  <Switch>
    <Route path="/" exact>
      <span>Dashboard</span>
    </Route>
    <Route path="/contacts">
      <span>Contacts</span>
    </Route>
    <Route path="/companies">
      <span>Companies</span>
    </Route>
    <Route path="/opportunities">
      <span>Opportunities</span>
    </Route>
    <Route path="/profile">
      <span>Profile</span>
    </Route>
  </Switch>
);

const NavDisplay = props => (
  <div className="nav">
    <button
      className="button-group hamburger"
      onClick={() => props.setIsHamburgerOpen(!props.isHamburgerOpen)}
    >
      <span className="fa fa-bars" />
    </button>
    <div className="mobile-page-title">
      {props.user ? (
        <span>
          {props.user.username} / {getPageTitle()}
        </span>
      ) : (
        <span>Agility Customer Management</span>
      )}
    </div>
    <div className="mobile-notifications-icon" />
    <div className={`hamburger-menu ${props.isHamburgerOpen && 'open'}`}>
      {routes
        .filter(route => route.isNavLink)
        .map(({ path, title, exact, className, icon }, index) => (
          <NavLink
            key={index}
            to={path}
            className={className}
            exact={exact}
            onClick={() => props.setIsHamburgerOpen(false)}
          >
            <span className="nav-button">
              <span className={`icon fa fa-fw ${icon}`} />
              {title}
            </span>
          </NavLink>
        ))}
      <a href="#" onClick={props.goToProfile}>
        <span className="nav-button">
          <span className="icon fa fa-fw fa-user" />
          Edit profile
        </span>
      </a>
      <a href="#" onClick={props.tryLogout}>
        <span className="nav-button">
          <span className="icon fa fa-fw fa-sign-out" />
          Log out
        </span>
      </a>
    </div>
    <div className="button-group links">
      {routes
        .filter(route => route.isNavLink)
        .map(({ path, title, exact, className }, index) => (
          <NavLink key={index} to={path} className={className} exact={exact}>
            <span className="nav-button">{title}</span>
          </NavLink>
        ))}
    </div>
    <div className="button-group search-and-profile">
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
