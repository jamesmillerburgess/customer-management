import { Meteor } from 'meteor/meteor';

import FieldOptions from '../fieldOptions/fieldOptionsCollection';
import FieldLists from '../fieldList/fieldListCollection';
import Contacts from '../contact/contactCollection';
import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';
import Teams from '../team/teamCollection';

export const getSkip = pageNumber =>
  pageNumber === undefined ? undefined : Math.max(0, (pageNumber - 1) * 10);
export const getLimit = pageNumber =>
  pageNumber === undefined ? undefined : pageNumber === 0 ? 20 : 30;

export const all = collection => {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  return collection.find();
};

export const user = function(collection, params = {}) {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  const skip = getSkip(params.pageNumber);
  const limit = getLimit(params.pageNumber);
  const query = { users: Meteor.userId() };
  if (!params.showArchived) {
    query.isArchived = false;
  }
  return collection.find(query, { sort: { createDate: -1 }, skip, limit });
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

export const team = (collection, params = {}) => {
  const team = Teams.findOne(((Meteor.user() || {}).profile || {}).team);
  const skip = getSkip(params.pageNumber);
  const limit = getLimit(params.pageNumber);
  const query = { 'users.0': Meteor.userId() };
  if (!params.showArchived) {
    query.isArchived = false;
  }
  if (team && team.members) {
    query['users.0'] = { $in: team.members };
    return [
      collection.find(query, { sort: { createDate: -1 }, skip, limit }),
      Meteor.users.find({ _id: { $in: team.members } }),
    ];
  }
  return collection.find(query, { sort: { createDate: -1 }, skip, limit });
};

export const any = (collection, params = {}) => {
  const skip = getSkip(params.pageNumber);
  const limit = getLimit(params.pageNumber);
  const query = {};
  if (!params.showArchived) {
    query.isArchived = false;
  }
  return [
    collection.find(query, { sort: { createDate: -1 }, skip, limit }),
    Meteor.users.find(),
    Teams.find(),
  ];
};

Meteor.publish({
  'configurations.all': () => [all(FieldOptions), all(FieldLists)],
  'contact.user': params => user(Contacts, params),
  'company.user': params => user(Companies, params),
  'opportunity.user': params => user(Opportunities, params),
  'contact.single': id => single(Contacts, id),
  'company.single': id => single(Companies, id),
  'opportunity.single': id => single(Opportunities, id),
  'contact.team': params => team(Contacts, params),
  'company.team': params => team(Companies, params),
  'opportunity.team': params => team(Opportunities, params),
  'user.single': id => single(Meteor.users, id),
  'team.single': id => single(Teams, id),
  'team.list': ids => list(Teams, ids),
  'contact.any': params => any(Contacts, params),
  'company.any': params => any(Companies, params),
  'opportunity.any': params => any(Opportunities, params),
});
