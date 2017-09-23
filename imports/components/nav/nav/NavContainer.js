import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavDisplay from './NavDisplay';

const NavContainer = createContainer(props => {
  const user = Meteor.user();
  return { ...props, user };
}, NavDisplay);

export default NavContainer;
