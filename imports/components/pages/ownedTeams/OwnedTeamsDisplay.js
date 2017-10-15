import React from 'react';
import moment from 'moment';

import TextField from '../../fields/textField/TextField';
import CheckboxField from '../../fields/checkboxField/CheckboxField';
import Grid from '../../fields/Grid';

export const gridPageProps = props => ({
  noRows: `No teams yet!`,
  columns: [
    {
      width: 45,
      resizable: false,
      sortable: false,
      Header: cellProps => (
        <CheckboxField
          value={props.areAllSelected}
          onChange={value =>
            props.setAllRowSelection(cellProps.data.map(() => value))}
        />
      ),
      Cell: cellProps => (
        <CheckboxField
          value={props.rowSelection[cellProps.index]}
          onChange={value => props.setRowSelection(cellProps.index, value)}
        />
      ),
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
});

const OwnedTeamsDisplay = props => (
  <div>
    <div className="input-row">
      <div className="input-group">
        <div className="label">Team name</div>
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
      <Grid {...gridPageProps(props)} data={props.ownedTeams} />
      <div
        className={`button-footer ${props.areAnySelected
          ? 'expanded'
          : 'expandable'}`}
        style={{
          height: props.areAnySelected ? '90px' : '0px',
        }}
      >
        <div className="button-group">
          <button
            className="button-secondary"
            onClick={() => props.deleteRowSelection(props.rowSelection)}
          >
            Delete
          </button>
          <div className="edited-properties">
            You've selected {props.numSelectedRows}{' '}
            {props.numSelectedRows === 1 ? 'row' : 'rows'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OwnedTeamsDisplay;
