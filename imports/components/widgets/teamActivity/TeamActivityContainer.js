import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import TeamActivityDisplay from './TeamActivityDisplay';
import Activity from '../../../api/activity/activityCollection';

const sort = (a, b) => {
  return b.timestamp - a.timestamp;
};

const TeamActivityContainer = createContainer(props => {
  const user = Meteor.user();
  let activity = [];
  if (user && user.profile) {
    Meteor.subscribe('activity.team', user.profile.team);
    const range = moment.range(
      moment().date(1),
      moment()
        .add('months', 1)
        .date(0)
    );
    activity = Activity.find()
      .fetch()
      .filter(act => range.contains(moment(act.closeDate)))
      .sort(sort);
  }
  return { ...props, activity };
}, TeamActivityDisplay);

export default TeamActivityContainer;
