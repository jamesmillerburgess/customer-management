import { Meteor } from 'meteor/meteor';

import Companies from '../companyCollection';

export const publishUserCompanies = function() {
  if (this.userId) {
    return Companies.find({ users: this.userId });
  }
  return null;
};

Meteor.publish('company.user', publishUserCompanies);
