import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import validate from 'validate.js';

import Contacts from './contactCollection';
import { contactProps } from '../../components/pages/contact/Contact';
import { buildSearchRegExp } from '../searchUtils';

import * as GM from '../genericMethods';

// Generic Methods
export const create = contact => GM.create(Contacts, contact);
export const saveProperties = (contactId, contact) =>
  GM.saveProperties(Contacts, contactProps, contactId, contact);
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
