import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import ProfileContainer from './ProfileContainer';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ profile }) => ({
  username: profile.username || '',
  team: profile.team || '',
  newTeamName: profile.newTeamName || '',
  hasLoaded: profile.hasLoaded || false,
});

export const mapDispatchToProps = dispatch => ({
  setUsername: value => dispatch(setProfileProp('username', value)),
  setTeam: value => dispatch(setProfileProp('team', value)),
  setNewTeamName: value => dispatch(setProfileProp('newTeamName', value)),
  createTeam: value =>
    Meteor.call('team.create', value, (err, res) => {
      if (err) {
        console.log(err);
      }
      dispatch(setProfileProp('newTeamName', ''));
    }),
  saveProfile: value => Meteor.call('profile.save', Meteor.userId(), value),
  setHasLoaded: value => dispatch(setProfileProp('hasLoaded', value)),
});

const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
);

export default ProfileConnect;
