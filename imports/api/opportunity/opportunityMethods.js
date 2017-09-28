import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import validate from 'validate.js';

import Opportunities from './opportunityCollection';
import Companies from '../company/companyCollection';

import { STATUS_VALUES } from '../../components/fields/statusField/StatusField';

const CREATION = 'CREATION';
const NOTE = 'NOTE';
export const STATUS_CHANGE_FORWARD = 'STATUS_CHANGE_FORWARD';
export const STATUS_CHANGE_BACKWARD = 'STATUS_CHANGE_BACKWARD';

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

export const getStatusDirection = (from, to) =>
  STATUS_VALUES.indexOf(from) < STATUS_VALUES.indexOf(to)
    ? STATUS_CHANGE_FORWARD
    : STATUS_CHANGE_BACKWARD;

export const setStatus = function(opportunityId, status) {
  if (!validate.isString(opportunityId)) {
    throw new Error('No opportunityId passed');
  }
  const opportunity = Opportunities.findOne(opportunityId);
  if (!opportunity) {
    throw new Error('No opportunity with this id');
  }
  if (status === opportunity.status) {
    throw new Error('From and to statuses are the same');
  }
  const type = getStatusDirection(opportunity.status, status);
  const entry = {
    id: new Mongo.ObjectID()._str,
    type,
    timestamp: new Date(),
    userId: this.userId,
    from: opportunity.status,
    to: status,
    opportunityId: opportunityId,
    opportunityName: opportunity.name,
  };
  Opportunities.update(opportunityId, {
    $set: { status },
    $push: { timeline: entry },
  });
  if (opportunity.company && opportunity.company._id) {
    Companies.update(opportunity.company._id, {
      $push: { timeline: entry },
    });
  }
};

Meteor.methods({
  'opportunity.create': create,
  'opportunity.setStatus': setStatus,
});
