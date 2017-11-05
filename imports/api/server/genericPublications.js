import { Meteor } from 'meteor/meteor';

import FieldOptions from '../fieldOptions/fieldOptionsCollection';
import FieldLists from '../fieldList/fieldListCollection';
import Contacts from '../contact/contactCollection';
import Companies from '../company/companyCollection';
import Opportunities from '../opportunity/opportunityCollection';
import Teams from '../team/teamCollection';

const getSkip = pageNumber => Math.max(0, (pageNumber - 1) * 10);
const getLimit = pageNumber => (pageNumber === 0 ? 20 : 30);

export const all = collection => {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  return collection.find();
};

export const user = function(collection, pageNumber = 0) {
  if (!Meteor.userId()) {
    return collection.find({ _id: -1 });
  }
  const skip = getSkip(pageNumber);
  const limit = getLimit(pageNumber);
  return collection.find(
    { users: Meteor.userId(), isArchived: false },
    { sort: { createDate: -1 }, skip, limit }
  );
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

export const team = (collection, pageNumber = 0) => {
  const team = Teams.findOne(((Meteor.user() || {}).profile || {}).team);
  const skip = getSkip(pageNumber);
  const limit = getLimit(pageNumber);
  if (team && team.members) {
    return [
      collection.find(
        { 'users.0': { $in: team.members } },
        { sort: { createDate: -1 }, skip, limit }
      ),
      Meteor.users.find({ _id: { $in: team.members } }),
    ];
  }
  return collection.find(
    { 'users.0': Meteor.userId() },
    { sort: { createDate: -1 }, skip, limit }
  );
};

export const any = (collection, pageNumber) => {
  const skip = getSkip(pageNumber);
  const limit = getLimit(pageNumber);
  return [
    collection.find({}, { sort: { createDate: -1 }, skip, limit }),
    Meteor.users.find(),
    Teams.find(),
  ];
};

Meteor.publish({
  'configurations.all': () => [all(FieldOptions), all(FieldLists)],
  'contact.user': pageNumber => user(Contacts, pageNumber),
  'company.user': pageNumber => user(Companies, pageNumber),
  'opportunity.user': pageNumber => user(Opportunities, pageNumber),
  'contact.single': id => single(Contacts, id),
  'company.single': id => single(Companies, id),
  'opportunity.single': id => single(Opportunities, id),
  'contact.team': pageNumber => team(Contacts, pageNumber),
  'company.team': pageNumber => team(Companies, pageNumber),
  'opportunity.team': pageNumber => team(Opportunities, pageNumber),
  'user.single': id => single(Meteor.users, id),
  'team.single': id => single(Teams, id),
  'team.list': ids => list(Teams, ids),
  'contact.any': pageNumber => any(Contacts, pageNumber),
  'company.any': pageNumber => any(Companies, pageNumber),
  'opportunity.any': pageNumber => any(Opportunities, pageNumber),
});
