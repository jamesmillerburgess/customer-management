import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import BasicInfoDisplay from './BasicInfoDisplay';
import Teams from '../../../api/team/teamCollection';

const BasicInfoContainer = createContainer(props => {
  if (!Meteor.loggingIn() && !props.hasLoaded && !props.loading) {
    props.setHasLoaded(true);
    props.setUsername(Meteor.user().username);
    if (Meteor.user().profile && Meteor.user().profile.team) {
      const teamId = Meteor.user().profile.team;
      props.setTeam({
        _id: teamId,
        name: Teams.findOne(teamId).name,
      });
    } else {
      props.setTeam({ _id: '', name: 'No team assigned' });
    }
  }
  return props;
}, BasicInfoDisplay);

export default BasicInfoContainer;
