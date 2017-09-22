import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PageHeader from './PageHeader';

const ProfileDisplayInner = props => (
  <div>
    <PageHeader title="Profile" hideButtons />
    <div className="section-body">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          props.saveProfile({ username: props.username });
        }}
      >
        <div className="input-group">
          <div className="input-label">Username</div>
          <input
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="button-primary">
          Save
        </button>
      </form>
    </div>
  </div>
);

const ProfileDisplay = createContainer(props => {
  const isLoggingIn = Meteor.loggingIn();
  if (!Meteor.loggingIn() && !props.hasLoaded) {
    props.setHasLoaded(true);
    props.setUsername(Meteor.user().username);
  }
  return { ...props, isLoggingIn };
}, ProfileDisplayInner);

export default ProfileDisplay;
