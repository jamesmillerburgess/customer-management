import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import ProfileDisplay from './ProfileDisplay';

import { setProfileProp } from '../../state/actions/profileActionCreators';

export const mapStateToProps = ({ profile }) => ({
  username: profile.username || '',
  hasLoaded: profile.hasLoaded || !Meteor.loggingIn(),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setUsername: value => dispatch(setProfileProp('username', value)),
  saveProfile: value =>
    Meteor.call('profile.save', Meteor.userId(), value, (err, res) => {}),
  setHasLoaded: value => dispatch(setProfileProp('hasLoaded', value)),
});

const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(
  ProfileDisplay
);

export default ProfileConnect;
