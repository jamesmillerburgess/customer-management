import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavDisplay from './NavDisplay';

import Teams from '../../../api/team/teamCollection';

const NavContainer = createContainer(props => {
  const user = Meteor.user();
  let team = '';
  if (user && user.profile) {
    Meteor.subscribe('team.single', user.profile.team);
    team = Teams.findOne(user.profile.team);
  }
  return { ...props, user, team };
}, NavDisplay);

export default NavContainer;
