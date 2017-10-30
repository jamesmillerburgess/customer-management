import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { NavLink, Route } from 'react-router-dom';
import { Translate, I18n } from 'react-redux-i18n';

import PageHeader from '../PageHeader';
import BasicInfo from '../basicInfo/BasicInfo';
import OwnedTeams from '../ownedTeams/OwnedTeams';

const Profile = props => (
  <div>
    <PageHeader title={<Translate value="profile.title" />} hideButtons />
    <div className="section-body">
      <div className="sidebar">
        <ul>
          <NavLink to="/profile/basic-info">
            <li className="active">
              <Translate value="profile.basicInfo" />
            </li>
          </NavLink>
          <NavLink to="/profile/owned-teams">
            <li>
              <Translate value="profile.ownedTeams" />
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="content">
        <Route path="/profile/basic-info" component={BasicInfo} />
        <Route path="/profile/owned-teams" component={OwnedTeams} />
      </div>
    </div>
  </div>
);

export default Profile;
