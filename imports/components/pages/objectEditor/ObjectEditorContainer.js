import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import deepEqual from 'deep-equal';
import axios from 'axios';

import FieldLists from '../../../api/fieldList/fieldListCollection';

export const linkMeteorData = props => {
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
  const setInitialProperties = () => {
    if (!props.hasLoaded || object._id !== props.loadedValues._id) {
      props.setHasLoaded(true);
      fieldList.fields.forEach(properties =>
        props.setProperty(properties.name, object[properties.name])
      );
      props.setProperty('avatarURL', object.avatarURL);
      properties = fieldList.fields;
      props.setLoadedValues(object);
    }
  };
  const updateProperties = () => {
    if (
      props.loadedValues._id &&
      (props.hasLoaded || object._id !== props.loadedValues._id)
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
  };
  if (object._id && fieldList && fieldList.fields && !props.loading) {
    setInitialProperties();
    updateProperties();
  }
  const handleDrop = files => {
    // Push all the axios request promise into a single array
    // Initial FormData
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('tags', `user avatar`);
    formData.append('upload_preset', 'euqfrerp'); // Replace the preset name with your own
    formData.append('timestamp', (Date.now() / 1000) | 0);

    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    const uploader = axios
      .post(
        'https://api.cloudinary.com/v1_1/dqhfaa1im/image/upload',
        formData,
        {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }
      )
      .then(response => {
        console.log(response);
        const data = response.data;
        const avatarURL = data.public_id; // You should store this URL for future references in your app
        Meteor.call(
          props.savePropertiesMethod,
          props.match.params[props.uriID],
          { avatarURL },
          (err, res) => {
            if (!err) {
              props.setProperty('hasLoaded', false);
            } else {
              console.log(err);
            }
          }
        );
      });
  };
  return { ...props, object, loading, properties, handleDrop };
};

const ObjectEditorContainer = ObjectEditorDisplay =>
  createContainer(linkMeteorData, ObjectEditorDisplay);

export default ObjectEditorContainer;
