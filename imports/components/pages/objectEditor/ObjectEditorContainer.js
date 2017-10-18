import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

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
    (!props.hasLoaded || object._id !== props.loadedValues._id)
  ) {
    props.setHasLoaded(true);
    fieldList.fields.forEach(properties =>
      props.setProperty(properties.name, object[properties.name])
    );
    properties = fieldList.fields;
    props.setLoadedValues(object);
  }
  return { ...props, object, loading, properties };
};

const ObjectEditorContainer = ObjectEditorDisplay =>
  createContainer(linkMeteorData, ObjectEditorDisplay);

export default ObjectEditorContainer;
