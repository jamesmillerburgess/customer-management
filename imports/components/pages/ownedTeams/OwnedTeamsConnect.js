import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import OwnedTeamsDisplay from './OwnedTeamsDisplay';

import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ profile }, ownProps) => {
  const props = {
    newTeamName: profile.newTeamName || '',
    rowSelection: profile.ownedTeamsRowSelection || [],
  };
  props.areAnySelected = props.rowSelection.indexOf(true) !== -1;
  props.numSelectedRows = props.rowSelection.reduce(
    (prev, curr) => (curr ? prev + 1 : prev),
    0
  );
  props.areAllSelected =
    ownProps.ownedTeams.length > 0 &&
    ownProps.ownedTeams.reduce(
      (prev, v, i) => prev && props.rowSelection[i],
      true
    );
  props.isEditButtonDisabled = props.numSelectedRows !== 1;
  return props;
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllRowSelection: value =>
    dispatch(setProfileProp('ownedTeamsRowSelection', value)),
  setRowSelection: (index, value) =>
    dispatch(setProfileProp(`ownedTeamsRowSelection[${index}]`, value)),
  setNewTeamName: value => dispatch(setProfileProp('newTeamName', value)),
  deleteRowSelection: rowSelection =>
    Meteor.call(
      'team.remove',
      ownProps.ownedTeams
        .filter((t, i) => rowSelection[i])
        .map(team => team._id),
      (err, res) => {
        if (err) {
          console.log(err);
        }
        dispatch(setProfileProp('ownedTeamsRowSelection', []));
      }
    ),
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
  OwnedTeamsDisplay
);

export default OwnedTeamsConnect;
