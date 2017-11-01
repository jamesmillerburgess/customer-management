import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavDisplay from './NavDisplay';

import Teams from '../../../api/team/teamCollection';

const NavContainer = createContainer(props => {
  const user = Meteor.user();
  let avatarURL = '';
  let team = '';
  if (user && user.profile) {
    Meteor.subscribe('team.single', user.profile.team);
    team = Teams.findOne(user.profile.team);
    avatarURL = user.profile.avatarURL;
  }
  return { ...props, user, team, avatarURL };
}, NavDisplay);

export default NavContainer;
