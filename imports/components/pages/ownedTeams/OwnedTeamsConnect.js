import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import OwnedTeamsContainer from './OwnedTeamsContainer';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ profile }) => ({
  newTeamName: profile.newTeamName || '',
});

export const mapDispatchToProps = dispatch => ({
  setNewTeamName: value => dispatch(setProfileProp('newTeamName', value)),
  createTeam: value =>
    Meteor.call('team.create', value, (err, res) => {
      if (err) {
        console.log(err);
      }
      dispatch(setProfileProp('newTeamName', ''));
    }),
  removeTeam: value =>
    Meteor.call('team.remove', value, (err, res) => {
      if (err) {
        console.log(err);
      }
    }),
});

const OwnedTeamsConnect = connect(mapStateToProps, mapDispatchToProps)(
  OwnedTeamsContainer
);

export default OwnedTeamsConnect;
