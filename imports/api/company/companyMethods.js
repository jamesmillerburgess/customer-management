import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';

import Companies from './companyCollection';
import { COMPANY_FIELDS } from '../../components/pages/company/CompanyConnect';

const CREATION = 'CREATION';
const NOTE = 'NOTE';

const create = function(company, userId) {
  return Companies.insert({
    ...company,
    users: [userId],
    isArchived: false,
    timeline: [
      {
        id: new Mongo.ObjectID()._str,
        type: CREATION,
        timestamp: new Date(),
        userId: this.userId,
      },
    ],
  });
};

export const save = function(companyId, company) {
  const fields = _.pick(COMPANY_FIELDS.map(field => field.property), company);
  Companies.update(companyId, { $set: fields });
};

export const addNote = function(companyId, note) {
  Companies.update(companyId, {
    $push: {
      timeline: {
        id: new Mongo.ObjectID()._str,
        type: NOTE,
        timestamp: new Date(),
        userId: this.userId,
        username: Meteor.users.findOne(this.userId).username,
        note,
      },
    },
  });
};

Meteor.methods({
  'company.create': create,
  'company.save': save,
  'company.addNote': addNote,
});
