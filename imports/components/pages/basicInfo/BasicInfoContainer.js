import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import BasicInfoDisplay from './BasicInfoDisplay';

const BasicInfoContainer = createContainer(props => {
  if (!Meteor.loggingIn() && !props.hasLoaded) {
    props.setHasLoaded(true);
    props.setUsername(Meteor.user().username);
    props.setTeam(Meteor.user().profile.team);
  }
  return props;
}, BasicInfoDisplay);

export default BasicInfoContainer;
