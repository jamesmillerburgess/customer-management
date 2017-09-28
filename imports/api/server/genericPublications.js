import { Meteor } from 'meteor/meteor';

import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';

export const user = function(collection) {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find({ users: Meteor.userId(), isArchived: false });
};

export const single = function(collection, companyId) {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find({ _id: companyId });
};

Meteor.publish({
  'company.user': () => user(Companies),
  'opportunity.user': () => user(Opportunities),
  'company.single': companyId => single(Companies, companyId),
  'opportunity.single': companyId => single(Opportunities, companyId),
});
