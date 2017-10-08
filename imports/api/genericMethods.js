import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

import FieldLists from './fieldList/fieldListCollection';
import { buildSearchRegExp } from './searchUtils';

const CREATION = 'CREATION';
const NOTE = 'NOTE';
const CALL = 'CALL';
const EMAIL = 'EMAIL';
const MEETING = 'MEETING';

export const create = (collection, object) => {
  if (!object || !object.name) {
    throw new Error();
  }
  return collection.insert({
    ...object,
    users: [Meteor.userId()],
    createDate: new Date(),
    isArchived: false,
    timeline: [
      {
        id: new Mongo.ObjectID()._str,
        type: CREATION,
        timestamp: new Date(),
        userId: Meteor.userId(),
        keyword: object.name,
      },
    ],
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
  const properties = FieldLists.findOne({ page: propertiesPage }).fields;
  const fields = _.pick(properties.map(property => property.name), object);
  collection.update(objectId, { $set: fields });
};

export const addNote = (collection, objectId, note) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  collection.update(objectId, {
    $push: {
      timeline: {
        id: note.id,
        type: NOTE,
        timestamp: new Date(),
        userId: Meteor.userId(),
        keyword: Meteor.users.findOne(Meteor.userId()).username,
        note: note.note,
      },
    },
  });
};

export const logCall = (collection, objectId, call) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  collection.update(objectId, {
    $push: {
      timeline: {
        id: call.id,
        type: CALL,
        timestamp: new Date(),
        userId: Meteor.userId(),
        keyword: Meteor.users.findOne(Meteor.userId()).username,
        callTime: call.callTime,
        callOutcome: call.callOutcome,
        callText: call.callText,
      },
    },
  });
};

export const logEmail = (collection, objectId, email) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  collection.update(objectId, {
    $push: {
      timeline: {
        id: email.id,
        type: EMAIL,
        timestamp: new Date(),
        userId: Meteor.userId(),
        keyword: Meteor.users.findOne(Meteor.userId()).username,
        callTime: email.callTime,
        callText: email.callText,
      },
    },
  });
};

export const logMeeting = (collection, objectId, meeting) => {
  if (!validate.isString(objectId)) {
    throw new Error('Parameter objectId must be a string');
  }
  collection.update(objectId, {
    $push: {
      timeline: {
        id: meeting.id,
        type: MEETING,
        timestamp: new Date(),
        userId: Meteor.userId(),
        keyword: Meteor.users.findOne(Meteor.userId()).username,
        meetingTime: meeting.meetingTime,
        meetingText: meeting.meetingText,
      },
    },
  });
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
    addNote(collection, objectId, note),
  [`${collectionName}.logCall`]: (objectId, call) =>
    logCall(collection, objectId, call),
  [`${collectionName}.logEmail`]: (objectId, email) =>
    logEmail(collection, objectId, email),
  [`${collectionName}.logMeeting`]: (objectId, meeting) =>
    logMeeting(collection, objectId, meeting),
  [`${collectionName}.search`]: searchText => search(collection, searchText),
});

const registerGenericMethods = (collectionName, collection, propertiesPage) => {
  Meteor.methods(
    buildGenericMethods(collectionName, collection, propertiesPage)
  );
};

export default registerGenericMethods;
