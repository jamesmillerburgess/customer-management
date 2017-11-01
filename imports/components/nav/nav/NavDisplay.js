import React from 'react';
import { Meteor } from 'meteor/meteor';
import { I18n, Translate } from 'react-redux-i18n';

import { NavLink, Switch, Route } from 'react-router-dom';
import routes from '../../../api/routes';
import './NavDisplay.scss';
import NavSearchInput from '../../fields/NavSearchInput';
import AvatarField from '../../fields/avatarField/AvatarField';

export const getPageTitle = () => (
  <Switch>
    <Route path="/" exact>
      <Translate value="nav.dashboard" />
    </Route>
    <Route path="/contacts">
      <Translate value="nav.contacts" />
    </Route>
    <Route path="/companies">
      <Translate value="nav.companies" />
    </Route>
    <Route path="/opportunities">
      <Translate value="nav.opportunities" />
    </Route>
    <Route path="/profile">
      <Translate value="nav.profile" />
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
        <Translate value="app.title" />
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
          <Translate value="nav.editProfile" />
        </span>
      </a>
      <a href="#" onClick={props.tryLogout}>
        <span className="nav-button">
          <span className="icon fa fa-fw fa-sign-out" />
          <Translate value="nav.logOut" />
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
    {props.user && (
      <div className="button-group search-and-profile">
        <NavSearchInput placeholder={I18n.t('nav.search')} />
        <div>
          <button
            id="profile-button"
            className="nav-button"
            onClick={() => props.setIsProfileMenuOpen(!props.isProfileMenuOpen)}
          >
            <div className="profile-button-text">
              <div className="username">{props.user.username} </div>
              <div className="team-name">{props.team && props.team.name}</div>
            </div>
          </button>
          <div
            id="profile-menu"
            className={`profile-menu ${props.isProfileMenuOpen ? 'open' : ''}`}
          >
            <div className="nav-name">
              <AvatarField
                className="nav-avatar"
                publicId={props.avatarURL || 'empty-profile-pic_wqnyvm.png'}
                height="30"
                width="30"
              />
              {props.user.username}
            </div>
            <hr />
            <ul>
              <li>
                <a href="#" onClick={props.goToProfile}>
                  <Translate value="nav.editProfile" />
                </a>
              </li>
              <li>
                <a href="#" onClick={props.tryLogout}>
                  <Translate value="nav.logOut" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default NavDisplay;
