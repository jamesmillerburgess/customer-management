import { Meteor } from 'meteor/meteor';

import Opportunities from './opportunityCollection';

const CREATION = 'CREATION';
const NOTE = 'NOTE';
const STATUS_CHANGE = 'STATUS_CHANGE';

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

export const setStatus = function(opportunityId, status) {
  if (!opportunityId) {
    throw new Error('No opportunityId passed');
  }
  const opportunity = Opportunities.findOne(opportunityId);
  if (!opportunity) {
    throw new Error('No opportunity with this id');
  }
  if (status === opportunity.status) {
    return;
  }
  Opportunities.update(opportunityId, {
    $set: { status },
    $push: {
      timeline: {
        id: new Mongo.ObjectID()._str,
        type: STATUS_CHANGE,
        timestamp: new Date(),
        userId: this.userId,
        keyword: status,
      },
    },
  });
};

Meteor.methods({
  'opportunity.create': create,
  'opportunity.setStatus': setStatus,
});
