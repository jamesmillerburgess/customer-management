import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import OwnedTeamsDisplay from './OwnedTeamsDisplay';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const selectId = a => a._id;

export const mapStateToProps = (state, ownProps) => ({
  newTeamName: state.profile.newTeamName || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllRowSelection: value =>
    dispatch(setProfileProp('ownedTeamsRowSelection', value)),
  setRowSelection: (id, value) =>
    dispatch(setProfileProp(`ownedTeamsRowSelection.${id}`, value)),
  setNewTeamName: value => dispatch(setProfileProp('newTeamName', value)),
  createTeam: value =>
    Meteor.call('team.create', value, (err, res) => {
      if (err) {
        console.log(err);
      }
      dispatch(setProfileProp('newTeamName', ''));
    }),
});

const OwnedTeamsConnect = connect(mapStateToProps, mapDispatchToProps)(
  OwnedTeamsDisplay
);

export default OwnedTeamsConnect;
