import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PageHeader from '../PageHeader';
import TeamField from '../../fields/teamField/TeamField';

const ProfileDisplay = props => (
  <div>
    <PageHeader title="Profile" hideButtons />
    <div className="section-body">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          props.saveProfile({ username: props.username, team: props.team });
        }}
      >
        <div className="input-group">
          <div className="input-label">Username</div>
          <input
            id="username"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">Team</div>
          <TeamField value={props.team} onChange={props.setTeam} />
        </div>
        <button type="submit" className="button-primary">
          Save
        </button>
      </form>
    </div>
  </div>
);

export default ProfileDisplay;
