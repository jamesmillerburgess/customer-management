import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import TeamActivityDisplay from './TeamActivityDisplay';
import Activity from '../../../api/activity/activityCollection';
import Teams from '../../../api/team/teamCollection';

const sort = (a, b) => {
  return b.timestamp - a.timestamp;
};

const TeamActivityContainer = createContainer(props => {
  const user = Meteor.user();
  let activity = [];
  if (user && user.profile) {
    const teamId = user.profile.team;
    const range = moment.range(
      moment().date(1),
      moment()
        .add(1, 'months')
        .date(0)
    );
    const team = Teams.findOne(teamId);
    const ids = team && team.members ? team.members : [Meteor.userId()];
    activity = Activity.find({ userId: { $in: ids } })
      .fetch()
      .filter(act => range.contains(moment(act.closeDate)))
      .sort(sort);
  }
  return { ...props, activity };
}, TeamActivityDisplay);

export default TeamActivityContainer;
