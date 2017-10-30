import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppDisplay from './AppDisplay';
import FieldOptions from '../api/fieldOptions/fieldOptionsCollection';

export const linkMeteorData = props => {
  const loading = !Meteor.user() || Meteor.loggingIn();
  const userLocale = ((Meteor.user() || {}).profile || {}).locale;
  if (userLocale && userLocale !== props.locale) {
    props.setLocale(Meteor.user().profile.locale);
  }
  return { ...props, loading };
};

const AppContainer = createContainer(linkMeteorData, AppDisplay);

export default AppContainer;
