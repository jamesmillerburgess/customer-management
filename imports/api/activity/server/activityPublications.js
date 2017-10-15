import { Meteor } from 'meteor/meteor';

import Activity from '../activityCollection';
import Teams from '../../team/teamCollection';

export const team = (teamId, from, to) => {
  const team = Teams.findOne(teamId);
  const members = team.members;
  return Activity.find({ userId: { $in: members } });
};

Meteor.publish({
  'activity.team': team,
});
