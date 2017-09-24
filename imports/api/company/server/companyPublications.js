import { Meteor } from 'meteor/meteor';

import Companies from '../companyCollection';

export const publishUserCompanies = function() {
  if (this.userId) {
    return Companies.find({ users: this.userId, isArchived: false });
  }
  return null;
};

export const publishSingleCompany = function(companyId) {
  if (this.userId) {
    return Companies.find({ _id: companyId });
  }
  return null;
};

Meteor.publish({
  'company.user': publishUserCompanies,
  'company.single': publishSingleCompany,
});
