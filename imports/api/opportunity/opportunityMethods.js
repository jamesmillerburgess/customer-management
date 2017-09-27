import { Meteor } from 'meteor/meteor';

import Opportunities from './opportunityCollection';

export const create = function(opportunity) {
  if (!opportunity || !opportunity.name) {
    throw new Error();
  }
  return Opportunities.insert({
    ...opportunity,
    users: [this.userId],
    createDate: new Date(),
    isArchived: false,
    timeline: [
      {
        id: new Mongo.ObjectID()._str,
        type: CREATION,
        timestamp: new Date(),
        userId: this.userId,
        keyword: opportunity.name,
      },
    ],
  });
};

Meteor.methods({
  'opportunity.create': create,
});
