import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { NavLink, Route } from 'react-router-dom';

import PageHeader from '../PageHeader';
import BasicInfo from '../basicInfo/BasicInfo';
import OwnedTeams from '../ownedTeams/OwnedTeams';

const ProfileDisplay = props => (
  <div>
    <PageHeader title="Profile" hideButtons />
    <div className="section-body">
      <div className="sidebar">
        <ul>
          <NavLink to="/profile/basic-info">
            <li className="active">Basic info</li>
          </NavLink>
          <NavLink to="/profile/owned-teams">
            <li>Owned teams</li>
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

export default ProfileDisplay;
