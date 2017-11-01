import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setLocale } from 'react-redux-i18n';
import BasicInfoContainer from './BasicInfoContainer';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

const getLoading = state => (state.app.loading === false ? false : true);
const getUsername = state => state.profile.username || '';
const getTeam = state => state.profile.team || '';
const getHasLoaded = state => state.profile.hasLoaded || false;
const getLocale = state => state.profile.locale || 'en-us';
const getAvatarURL = state =>
  state.profile.avatarURL || 'empty-profile-pic_wqnyvm.png';

export const mapStateToProps = state => ({
  loading: getLoading(state),
  username: getUsername(state),
  team: getTeam(state),
  hasLoaded: getHasLoaded(state),
  locale: getLocale(state),
  avatarURL: getAvatarURL(state),
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
