import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import validate from 'validate.js';

import Companies from './companyCollection';
import { companyProps } from '../../components/pages/company/Company';
import { buildSearchRegExp } from '../searchUtils';

const CREATION = 'CREATION';
const NOTE = 'NOTE';

import * as GM from '../genericMethods';

// Generic Methods
export const create = company => GM.create(Companies, company);
export const saveProperties = (companyId, company) =>
  GM.saveProperties(Companies, companyProps, companyId, company);
export const addNote = (companyId, note) =>
  GM.addNote(Companies, companyId, note);

export const search = function(search) {
  validate.isString(search);
  const query = { name: { $regex: buildSearchRegExp(search) } };
  return Companies.find(query).fetch();
};

Meteor.methods({
  'company.create': create,
  'company.saveProperties': saveProperties,
  'company.addNote': addNote,
  'company.search': search,
});
