import { Meteor } from 'meteor/meteor';

import Opportunities from '../opportunityCollection';

export const user = function() {
  if (!this.userId) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return Opportunities.find({ users: this.userId, isArchived: false });
};

export const single = function(opportunityId) {
  if (!this.userId) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return Opportunities.find({ _id: opportunityId });
};

Meteor.publish({
  'opportunity.user': user,
  'opportunity.single': single,
});
