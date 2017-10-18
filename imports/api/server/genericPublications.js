import { Meteor } from 'meteor/meteor';

import FieldOptions from '../fieldOptions/fieldOptionsCollection';
import FieldLists from '../fieldList/fieldListCollection';
import Contacts from '../contact/contactCollection';
import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';
import Teams from '../team/teamCollection';

export const all = collection => {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  return collection.find();
};

export const user = function(collection) {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  return collection.find({ users: Meteor.userId(), isArchived: false });
};

export const single = function(collection, id) {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  return collection.find({ _id: id });
};

export const list = (collection, ids) => {
  return collection.find({ _id: { $in: ids } });
};

export const team = (collection, id) => {
  const team = Teams.findOne(id);
  if (team && team.members) {
    return collection.find({ 'users.0': { $in: team.members } });
  }
  return collection.find({ 'users.0': Meteor.userId() });
};

Meteor.publish({
  'configurations.all': () => [all(FieldOptions), all(FieldLists)],
  'contact.user': () => user(Contacts),
  'company.user': () => user(Companies),
  'opportunity.user': () => user(Opportunities),
  'contact.single': id => single(Contacts, id),
  'company.single': id => single(Companies, id),
  'opportunity.single': id => single(Opportunities, id),
  'opportunity.team': id => team(Opportunities, id),
  'team.single': id => single(Teams, id),
  'team.list': ids => list(Teams, ids),
});
