import { Meteor } from 'meteor/meteor';

import Activity from '../activityCollection';
import Teams from '../../team/teamCollection';

export const team = teamId => {
  const team = Teams.findOne(teamId);
  if (team && team.members) {
    return Activity.find({
      $or: [{ userId: { $in: team.members } }, { parentId: teamId }],
    });
  }
  return Activity.find({ userId: Meteor.userId() });
};

Meteor.publish({
  'activity.team': team,
});
