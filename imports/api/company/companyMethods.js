import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';

import Companies from './companyCollection';
import { COMPANY_FIELDS } from '../../components/pages/company/CompanyConstants';

const CREATION = 'CREATION';
const NOTE = 'NOTE';

export const create = function(company) {
  if (!company || !company.name) {
    throw new Error();
  }
  return Companies.insert({
    ...company,
    users: [this.userId],
    isArchived: false,
    timeline: [
      {
        id: new Mongo.ObjectID()._str,
        type: CREATION,
        timestamp: new Date(),
        userId: this.userId,
        keyword: company.name,
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
        keyword: Meteor.users.findOne(this.userId).username,
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
