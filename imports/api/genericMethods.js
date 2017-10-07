import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';
import validate from 'validate.js';

const CREATION = 'CREATION';
const NOTE = 'NOTE';

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

export const saveProperties = (collection, objectProps, objectId, object) => {
  if (!validate.isString(objectId)) {
    throw new Error('objectId must be a string');
  }
  if (!collection.findOne(objectId)) {
    throw new Error('No document with the given objectId');
  }
  const fields = _.pick(
    objectProps().properties.map(property => property.name),
    object
  );
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
