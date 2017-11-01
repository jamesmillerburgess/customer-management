import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import TimelineEntryDisplay from './TimelineEntryDisplay';

import Teams from '../../../api/team/teamCollection';

const TimelineEntryContainer = createContainer(props => {
  const ready = Meteor.subscribe('user.single', props.userId).ready();
  let user = {};
  let avatarURL = 'empty-profile-pic_wqnyvm.png';
  if (ready) {
    user = Meteor.users.findOne(props.userId);
    if (user.profile) {
      avatarURL = user.profile.avatarURL;
    }
  }
  return { ...props, avatarURL };
}, TimelineEntryDisplay);

export default TimelineEntryContainer;
