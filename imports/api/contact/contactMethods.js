import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import validate from 'validate.js';

import Contacts from './contactCollection';
import { buildSearchRegExp } from '../searchUtils';
import FieldLists from '../fieldList/fieldListCollection';

import * as GM from '../genericMethods';

const properties = () =>
  FieldLists.findOne({ page: 'CONTACT_PROPERTIES' })
    ? FieldLists.findOne({ page: 'CONTACT_PROPERTIES' }).fields
    : [];

// Generic Methods
export const create = contact => GM.create(Contacts, contact);
export const saveProperties = (contactId, contact) =>
  GM.saveProperties(Contacts, properties(), contactId, contact);
export const addNote = (contactId, note) =>
  GM.addNote(Contacts, contactId, note);

export const search = function(search) {
  validate.isString(search);
  const query = { name: { $regex: buildSearchRegExp(search) } };
  return Contacts.find(query).fetch();
};

Meteor.methods({
  'contact.create': create,
  'contact.saveProperties': saveProperties,
  'contact.addNote': addNote,
  'contact.search': search,
});
