import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import FieldLists from './fieldList/fieldListCollection';
import Activity from './activity/activityCollection';
import { buildSearchRegExp } from './methodUtils';

const CREATION = 'CREATION';
const NOTE = 'NOTE';
const CALL = 'CALL';
const EMAIL = 'EMAIL';
const MEETING = 'MEETING';

export const addActivity = (activity, collection, id) => {
  Activity.insert({
    ...activity,
    parent: id,
    parentName: collection.findOne(id).name,
    parentCollection: collection._name,
  });
};

export const create = (collection, object) => {
  if (!object || !object.name) {
    throw new Error();
  }
  const activity = {
    id: new Mongo.ObjectID()._str,
    type: CREATION,
    timestamp: new Date(),
    userId: Meteor.userId(),
    keyword: object.name,
  };
  const id = collection.insert({
    ...object,
    users: [Meteor.userId()],
    createDate: new Date(),
    isArchived: false,
    timeline: [activity],
  });
  addActivity(activity, collection, id);
  return id;
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
  const properties = FieldLists.findOne({ page: propertiesPage }).fields;
  const fields = _.pick(properties.map(property => property.name), object);
  collection.update(objectId, { $set: fields });
};

export const logInteraction = (collection, objectId, interaction, type) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  const activity = {
    id: interaction.id,
    type,
    timestamp: new Date(),
    userId: Meteor.userId(),
    keyword: Meteor.users.findOne(Meteor.userId()).username,
    time: interaction.time,
    outcome: interaction.outcome,
    text: interaction.text,
  };
  collection.update(objectId, { $push: { timeline: activity } });
  addActivity(activity, collection, objectId);
};

export const search = (collection, searchText) => {
  validate.isString(searchText);
  const query = { name: { $regex: buildSearchRegExp(searchText) } };
  return collection.find(query).fetch();
};

export const buildGenericMethods = (
  collectionName,
  collection,
  propertiesPage
) => ({
  [`${collectionName}.create`]: object => create(collection, object),
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
  [`${collectionName}.search`]: searchText => search(collection, searchText),
});

const registerGenericMethods = (collectionName, collection, propertiesPage) => {
  Meteor.methods(
    buildGenericMethods(collectionName, collection, propertiesPage)
  );
};

export default registerGenericMethods;
