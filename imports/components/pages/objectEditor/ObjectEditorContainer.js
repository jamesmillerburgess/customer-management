import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import deepEqual from 'deep-equal';

import FieldLists from '../../../api/fieldList/fieldListCollection';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, object: { timeline: [] }, loading: true };
  }
  const objectId = props.match.params.objectId;
  const loading = !Meteor.subscribe(props.subscription, objectId).ready();
  const fieldList = FieldLists.findOne({ page: props.propertiesPage });
  let properties = [];
  if (fieldList && fieldList.fields) {
    properties = fieldList.fields;
  }
  const object = props.collection.findOne(objectId) || {
    name: '',
    timeline: [],
  };
  if (
    object._id &&
    fieldList &&
    fieldList.fields &&
    (!props.hasLoaded || object._id !== props.loadedValues._id) &&
    !props.loading
  ) {
    props.setHasLoaded(true);
    fieldList.fields.forEach(properties =>
      props.setProperty(properties.name, object[properties.name])
    );
    properties = fieldList.fields;
    props.setLoadedValues(object);
  }
  if (
    object._id &&
    fieldList &&
    fieldList.fields &&
    props.loadedValues._id &&
    (props.hasLoaded || object._id !== props.loadedValues._id) &&
    !props.loading
  ) {
    let hasUpdate = false;
    fieldList.fields.forEach(property => {
      if (
        !deepEqual(object[property.name], props.loadedValues[property.name])
      ) {
        props.setProperty(property.name, object[property.name]);
        hasUpdate = true;
      }
    });
    if (hasUpdate) {
      props.setLoadedValues(object);
    }
  }
  return { ...props, object, loading, properties };
};

const ObjectEditorContainer = ObjectEditorDisplay =>
  createContainer(linkMeteorData, ObjectEditorDisplay);

export default ObjectEditorContainer;
