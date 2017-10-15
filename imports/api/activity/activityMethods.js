import { Meteor } from 'meteor/meteor';

import Activity from './activityCollection';

export const create = activity => {
  Activity.insert(activity);
};
