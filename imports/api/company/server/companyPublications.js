import { Meteor } from 'meteor/meteor';

import Companies from '../companyCollection';

export const user = function() {
  if (!this.userId) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return Companies.find({ users: this.userId, isArchived: false });
};

export const single = function(companyId) {
  if (!this.userId) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return Companies.find({ _id: companyId });
};

Meteor.publish({
  'company.user': user,
  'company.single': single,
});
