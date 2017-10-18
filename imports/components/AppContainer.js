import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppDisplay from './AppDisplay';
import FieldOptions from '../api/fieldOptions/fieldOptionsCollection';

export const linkMeteorData = props => {
  const loading = !Meteor.user() || Meteor.loggingIn();
  return { ...props, loading };
};

const AppContainer = createContainer(linkMeteorData, AppDisplay);

export default AppContainer;
