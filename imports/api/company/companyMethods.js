import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import Companies from './companyCollection';
import { COMPANY_FIELDS } from '../../components/pages/company/CompanyConstants';
import { buildSearchRegExp } from '../searchUtils';

const CREATION = 'CREATION';
const NOTE = 'NOTE';

export const create = function(company) {
  if (!company || !company.name) {
    throw new Error();
  }
  const entry = {
    id: new Mongo.ObjectID()._str,
    type: CREATION,
    timestamp: new Date(),
    userId: this.userId,
    keyword: company.name,
  };
  return Companies.insert({
    ...company,
    users: [this.userId],
    createDate: new Date(),
    isArchived: false,
    timeline: [entry],
  });
};

export const save = function(companyId, company) {
  const fields = _.pick(COMPANY_FIELDS.map(field => field.property), company);
  Companies.update(companyId, { $set: fields });
};

export const addNote = function(companyId, note) {
  if (!validate.isString(companyId)) {
    throw new Error('Parameter companyId must be a string');
  }
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

export const search = function(search) {
  validate.isString(search);
  const query = { name: { $regex: buildSearchRegExp(search) } };
  return Companies.find(query).fetch();
};

Meteor.methods({
  'company.create': create,
  'company.save': save,
  'company.addNote': addNote,
  'company.search': search,
});
