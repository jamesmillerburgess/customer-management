import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import TeamActivityDisplay from './TeamActivityDisplay';
import Activity from '../../../api/activity/activityCollection';

const sort = (a, b) => {
  return b.timestamp - a.timestamp;
};

const extractActivity = docs => {};

const TeamActivityContainer = createContainer(props => {
  const user = Meteor.user();
  let activity = [];
  if (user && user.profile) {
    Meteor.subscribe('activity.team', user.profile.team);
    activity = Activity.find()
      .fetch()
      .sort(sort);
  }
  return { ...props, activity };
}, TeamActivityDisplay);

export default TeamActivityContainer;
