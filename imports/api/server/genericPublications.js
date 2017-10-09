import { Meteor } from 'meteor/meteor';

import FieldOptions from '../fieldOptions/fieldOptionsCollection';
import FieldLists from '../fieldList/fieldListCollection';
import Contacts from '../contact/contactCollection';
import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';
import Teams from '../team/teamCollection';

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

export const single = function(collection, id) {
  if (!Meteor.userId()) {
    throw new Error('Cannot subscribe without being logged in');
  }
  return collection.find({ _id: id });
};

export const list = (collection, ids) => {
  return collection.find({ _id: { $in: ids } });
};

Meteor.publish({
  'configurations.all': () => [all(FieldOptions), all(FieldLists)],
  'contact.user': () => user(Contacts),
  'company.user': () => user(Companies),
  'opportunity.user': () => user(Opportunities),
  'contact.single': id => single(Contacts, id),
  'company.single': id => single(Companies, id),
  'opportunity.single': id => single(Opportunities, id),
  'team.single': id => single(Teams, id),
  'team.list': ids => list(Teams, ids),
});
