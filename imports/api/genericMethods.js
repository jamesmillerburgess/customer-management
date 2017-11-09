import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import FieldLists from './fieldList/fieldListCollection';
import Activity from './activity/activityCollection';
import { buildSearchRegExp } from './methodUtils';

const CREATION = 'CREATION';
const ARCHIVAL = 'ARCHIVAL';
const NOTE = 'NOTE';
const CALL = 'CALL';
const EMAIL = 'EMAIL';
const MEETING = 'MEETING';
const JOIN_TEAM = 'JOIN_TEAM';
const LEAVE_TEAM = 'LEAVE_TEAM';
const QUOTE = 'QUOTE';

export const addActivity = (activity, collection, id) => {
  const username = Meteor.user() ? Meteor.user().username : undefined;
  const parentCollection =
    collection && collection._name ? collection._name.toLowerCase() : undefined;
  const parentName =
    collection && collection.findOne(id)
      ? collection.findOne(id).name
      : undefined;
  return Activity.insert({
    ...activity,
    username,
    parent: id,
    parentName,
    parentCollection,
  });
};

export const create = (collection, object, activityId) => {
  if (!object || !object.name) {
    throw new Error('Missing required field: `Name`');
  }
  const activity = {
    _id: activityId,
    id: activityId,
    type: CREATION,
    timestamp: new Date(),
    userId: Meteor.userId(),
    keyword: object.name,
  };
  const id = collection.insert({
    ...object,
    // parsedPlace: undefined,
    // ...object.parsedPlace,
    users: [Meteor.userId()],
    createDate: new Date(),
    isArchived: false,
    timeline: [],
  });
  addActivity(activity, collection, id);
  collection.update(id, { $push: { timeline: Activity.findOne(activityId) } });
  return id;
};

export const archive = (collection, objects) => {
  collection.update(
    { _id: { $in: objects } },
    { $set: { isArchived: true } },
    { multi: true }
  );
  const activity = {
    type: ARCHIVAL,
    timestamp: new Date(),
    userId: Meteor.userId(),
  };
  objects.forEach(id => {
    const activityId = addActivity(activity, collection, id);
    collection.update(id, {
      $push: { timeline: Activity.findOne(activityId) },
    });
  });
};

export const saveProperties = (
  collection,
  propertiesPage,
  objectId,
  object
) => {
  if (!validate.isString(objectId)) {
    throw new Error('objectId must be a string');
  }
  if (!collection.findOne(objectId)) {
    throw new Error('No document with the given objectId');
  }
  if (collection._name === 'Opportunities' && object.status) {
    Meteor.call('opportunity.updateStatus', objectId, {
      status: object.status,
    });
  }
  const properties = FieldLists.findOne({ page: propertiesPage }).fields;
  const fields = _.pick(
    [...properties.map(property => property.name), 'avatarURL'],
    object
  );
  collection.update(objectId, { $set: fields });
};

export const logInteraction = (collection, objectId, interaction, type) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  const activity = {
    _id: interaction.id,
    id: interaction.id,
    type,
    timestamp: new Date(),
    userId: Meteor.userId(),
    keyword: Meteor.users.findOne(Meteor.userId()).username,
    time: interaction.time,
    outcome: interaction.outcome,
    text: interaction.text,
    quoteNumber: interaction.quoteNumber,
  };
  const activityId = addActivity(activity, collection, objectId);
  collection.update(objectId, {
    $push: { timeline: Activity.findOne(activityId) },
  });
};

export const search = (collection, searchText) => {
  validate.isString(searchText);
  const query = { name: { $regex: buildSearchRegExp(searchText) } };
  const options = { fields: { _id: 1, name: 1, members: 1 }, limit: 10 };
  return { searchResults: collection.find(query, options).fetch(), searchText };
};

export const buildGenericMethods = (
  collectionName,
  collection,
  propertiesPage
) => ({
  [`${collectionName}.create`]: (object, activityId) =>
    create(collection, object, activityId),
  [`${collectionName}.archive`]: objects => archive(collection, objects),
  [`${collectionName}.saveProperties`]: (objectId, object) =>
    saveProperties(collection, propertiesPage, objectId, object),
  [`${collectionName}.addNote`]: (objectId, note) =>
    logInteraction(collection, objectId, note, NOTE),
  [`${collectionName}.logCall`]: (objectId, call) =>
    logInteraction(collection, objectId, call, CALL),
  [`${collectionName}.logEmail`]: (objectId, email) =>
    logInteraction(collection, objectId, email, EMAIL),
  [`${collectionName}.logMeeting`]: (objectId, meeting) =>
    logInteraction(collection, objectId, meeting, MEETING),
  [`${collectionName}.logQuote`]: (objectId, quote) =>
    logInteraction(collection, objectId, quote, QUOTE),
  [`${collectionName}.search`]: searchText => search(collection, searchText),
});

const registerGenericMethods = (collectionName, collection, propertiesPage) => {
  Meteor.methods(
    buildGenericMethods(collectionName, collection, propertiesPage)
  );
};

export default registerGenericMethods;
