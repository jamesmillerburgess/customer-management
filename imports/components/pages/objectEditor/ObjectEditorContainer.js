import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, object: { timeline: [] }, loading: true };
  }
  const objectId = props.match.params.objectId;
  const loading = !Meteor.subscribe(props.subscription, objectId).ready();
  const object = props.collection.findOne(objectId) || {
    name: '',
    timeline: [],
  };
  if (
    object._id &&
    (!props.hasLoaded || object._id !== props.loadedValues._id)
  ) {
    props.setHasLoaded(true);
    props.properties.forEach(properties =>
      props.setProperty(properties.name, object[properties.name])
    );
    props.setLoadedValues(object);
  }
  return { ...props, object, loading };
};

const ObjectEditorContainer = ObjectEditorDisplay =>
  createContainer(linkMeteorData, ObjectEditorDisplay);

export default ObjectEditorContainer;
