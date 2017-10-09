import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ProfileDisplay from './ProfileDisplay';

const ProfileContainer = createContainer(props => {
  const isLoggingIn = Meteor.loggingIn();
  if (!Meteor.loggingIn() && !props.hasLoaded) {
    props.setHasLoaded(true);
    props.setUsername(Meteor.user().username);
  }
  const user = Meteor.user();
  return { ...props, isLoggingIn, user };
}, ProfileDisplay);

export default ProfileContainer;
