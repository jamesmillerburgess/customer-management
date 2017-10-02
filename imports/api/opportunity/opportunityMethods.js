import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import Opportunities from './opportunityCollection';
import Companies from '../company/companyCollection';

import { STATUS_VALUES } from '../../components/fields/statusField/StatusField';
import { opportunityProps } from '../../components/pages/opportunity/Opportunity';

import * as GM from '../genericMethods';

// Generic Methods
export const create = opportunity => GM.create(Opportunities, opportunity);
export const saveProperties = (opportunityId, opportunity) =>
  GM.saveProperties(
    Opportunities,
    opportunityProps,
    opportunityId,
    opportunity
  );
export const addNote = (opportunityId, note) =>
  GM.addNote(Opportunities, opportunityId, note);

// Opportunity-specific Methods
export const STATUS_CHANGE_FORWARD = 'STATUS_CHANGE_FORWARD';
export const STATUS_CHANGE_BACKWARD = 'STATUS_CHANGE_BACKWARD';

export const getStatusDirection = (from, to) =>
  STATUS_VALUES.indexOf(from) < STATUS_VALUES.indexOf(to)
    ? STATUS_CHANGE_FORWARD
    : STATUS_CHANGE_BACKWARD;

export const updateStatus = (opportunityId, status) => {
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
    userId: Meteor.userId(),
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
  'opportunity.saveProperties': saveProperties,
  'opportunity.addNote': addNote,
  'opportunity.updateStatus': updateStatus,
});
