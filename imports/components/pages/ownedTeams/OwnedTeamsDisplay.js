import React from 'react';
import moment from 'moment';

import TextField from '../../fields/textField/TextField';
import CheckboxField from '../../fields/checkboxField/CheckboxField';
import Grid from '../../fields/Grid';

const gridPageProps = {
  noRows: `No teams yet!`,
  columns: [
    {
      width: 45,
      resizable: false,
      sortable: false,
      Cell: props => <CheckboxField />,
    },
    {
      Header: 'Name',
      id: 'name',
      accessor: 'name',
    },
    {
      Header: 'Members',
      id: 'members',
      accessor: 'members.length',
    },
    {
      Header: 'Create Date',
      id: 'createDate',
      accessor: 'createDate',
      Cell: props => (
        <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
      ),
    },
  ],
};

const OwnedTeamsDisplay = props => (
  <div>
    <div className="input-row">
      <div className="input-group">
        <TextField value={props.newTeamName} onChange={props.setNewTeamName} />
        <button
          className="button-secondary"
          onClick={() => props.createTeam(props.newTeamName)}
        >
          Create team
        </button>
      </div>
    </div>
    <div className="input-group">
      <Grid {...gridPageProps} data={props.ownedTeams} />
    </div>
  </div>
);

export default OwnedTeamsDisplay;
