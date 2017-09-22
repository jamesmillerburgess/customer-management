import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import ProfileDisplay from './ProfileDisplay';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ profile }) => ({
  username: profile.username || '',
  hasLoaded: profile.hasLoaded || false,
});

export const mapDispatchToProps = dispatch => ({
  setUsername: value => dispatch(setProfileProp('username', value)),
  saveProfile: value =>
    Meteor.call('profile.save', Meteor.userId(), value, (err, res) => {}),
  setHasLoaded: value => dispatch(setProfileProp('hasLoaded', value)),
});

const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(
  ProfileDisplay
);

export default ProfileConnect;
