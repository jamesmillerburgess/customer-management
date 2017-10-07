import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import Opportunities from './opportunityCollection';
import Companies from '../company/companyCollection';
import FieldLists from '../fieldList/fieldListCollection';

import * as GM from '../genericMethods';
const properties = () =>
  FieldLists.findOne({ page: 'COMPANY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'COMPANY_PROPERTIES' }).fields
    : [];

const APPOINTMENT_SCHEDULED = 'APPOINTMENT_SCHEDULED';
const QUALIFIED_TO_BUY = 'QUALIFIED_TO_BUY';
const PRESENTATION_SCHEDULED = 'PRESENTATION_SCHEDULED';
const DECISION_MAKER_BOUGHT_IN = 'DECISION_MAKER_BOUGHT_IN';
const CONTRACT_SENT = 'CONTRACT_SENT';
const CLOSED_WON = 'CLOSED_WON';
const CLOSED_LOST = 'CLOSED_LOST';

export const STATUS_VALUES = [
  APPOINTMENT_SCHEDULED,
  QUALIFIED_TO_BUY,
  PRESENTATION_SCHEDULED,
  DECISION_MAKER_BOUGHT_IN,
  CONTRACT_SENT,
  CLOSED_WON,
  CLOSED_LOST,
];

export const STATUS_LABELS = {
  [STATUS_VALUES[0]]: 'Appointment Scheduled',
  [STATUS_VALUES[1]]: 'Qualified to Buy',
  [STATUS_VALUES[2]]: 'Presentation Scheduled',
  [STATUS_VALUES[3]]: 'Decision Maker Bought-In',
  [STATUS_VALUES[4]]: 'Contract Sent',
  [STATUS_VALUES[5]]: 'Closed Won',
  [STATUS_VALUES[6]]: 'Closed Lost',
};

// Generic Methods
export const create = opportunity => GM.create(Opportunities, opportunity);
export const saveProperties = (opportunityId, opportunity) =>
  GM.saveProperties(Opportunities, properties(), opportunityId, opportunity);
export const addNote = (opportunityId, note) =>
  GM.addNote(Opportunities, opportunityId, note);

// Opportunity-specific Methods
export const STATUS_CHANGE_FORWARD = 'STATUS_CHANGE_FORWARD';
export const STATUS_CHANGE_BACKWARD = 'STATUS_CHANGE_BACKWARD';

export const getStatusDirection = (from, to) =>
  STATUS_VALUES.indexOf(from) < STATUS_VALUES.indexOf(to)
    ? STATUS_CHANGE_FORWARD
    : STATUS_CHANGE_BACKWARD;

export const updateStatus = (opportunityId, { status, id }) => {
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
    id,
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
