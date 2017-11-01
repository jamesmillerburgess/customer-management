import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setLocale } from 'react-redux-i18n';
import BasicInfoContainer from './BasicInfoContainer';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ app, profile, i18n, subscriptions }) => ({
  loading: app.loading === false ? false : true,
  username: profile.username || '',
  team: profile.team || '',
  hasLoaded: profile.hasLoaded || false,
  locale: profile.locale || 'en-us',
  avatarURL: profile.avatarURL,
});

export const mapDispatchToProps = dispatch => ({
  setUsername: value => dispatch(setProfileProp('username', value)),
  setTeam: value => dispatch(setProfileProp('team', value)),
  setLocale: value => dispatch(setProfileProp('locale', value)),
  setAvatarURL: value => dispatch(setProfileProp('avatarURL', value)),
  saveProfile: value => Meteor.call('profile.save', Meteor.userId(), value),
  setHasLoaded: value => dispatch(setProfileProp('hasLoaded', value)),
});

const BasicInfoConnect = connect(mapStateToProps, mapDispatchToProps)(
  BasicInfoContainer
);

export default BasicInfoConnect;
