import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import BasicInfoDisplay from './BasicInfoDisplay';
import Teams from '../../../api/team/teamCollection';
import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection';

const BasicInfoContainer = createContainer(props => {
  const languages =
    (FieldOptions.findOne({ type: 'LANGUAGE' }) || {}).options || [];
  const loadProfile = () => {
    const user = Meteor.user() || {};
    const username = user.username;
    const profile = user.profile || {};
    const team = profile.team;
    const locale = profile.locale;
    props.setHasLoaded(true);
    props.setUsername(username);
    props.setLocale(profile.locale);
    if (team) {
      props.setTeam({
        _id: team,
        name: Teams.findOne(team).name,
      });
    }
  };
  if (!Meteor.loggingIn() && !props.hasLoaded && !props.loading) {
    loadProfile();
  }
  return { ...props, languages };
}, BasicInfoDisplay);

export default BasicInfoContainer;
