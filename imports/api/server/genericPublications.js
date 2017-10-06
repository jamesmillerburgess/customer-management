import { Meteor } from 'meteor/meteor';

import FieldOptions from '../fieldOptions/fieldOptionsCollection';
import Contacts from '../contact/contactCollection';
import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';

export const all = collection => {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find();
};

export const user = function(collection) {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find({ users: Meteor.userId(), isArchived: false });
};

export const single = function(collection, companyId) {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find({ _id: companyId });
};

Meteor.publish({
  'fieldOptions.all': () => all(FieldOptions),
  'contact.user': () => user(Contacts),
  'company.user': () => user(Companies),
  'opportunity.user': () => user(Opportunities),
  'contact.single': contactId => single(Contacts, contactId),
  'company.single': companyId => single(Companies, companyId),
  'opportunity.single': companyId => single(Opportunities, companyId),
});
