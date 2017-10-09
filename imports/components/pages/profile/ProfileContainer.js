import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ProfileDisplay from './ProfileDisplay';
import Teams from '../../../api/team/teamCollection';

const sort = (a, b) => {
  return b.createDate - a.createDate;
};

const ProfileContainer = createContainer(props => {
  const isLoggingIn = Meteor.loggingIn();
  if (!Meteor.loggingIn() && !props.hasLoaded) {
    props.setHasLoaded(true);
    props.setUsername(Meteor.user().username);
    props.setTeam(Meteor.user().profile.team);
  }
  const user = Meteor.user();
  let ownedTeams = [];
  if (user && user.profile) {
    Meteor.subscribe('team.list', user.profile.ownedTeams);
    ownedTeams = Teams.find({ _id: { $in: user.profile.ownedTeams } })
      .fetch()
      .sort(sort);
  }
  return { ...props, isLoggingIn, user, ownedTeams };
  // return {};
}, ProfileDisplay);

export default ProfileContainer;
