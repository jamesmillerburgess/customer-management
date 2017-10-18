import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppDisplay from './AppDisplay';
import FieldOptions from '../api/fieldOptions/fieldOptionsCollection';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, object: { timeline: [] }, loading: true };
  }
  const loading = !Meteor.subscribe('configurations.all').ready();
  Object.keys(props.subscriptions).forEach(key =>
    Meteor.subscribe.apply(null, props.subscriptions[key])
  );
  return { ...props, loading };
};

const AppContainer = createContainer(linkMeteorData, AppDisplay);

export default AppContainer;
