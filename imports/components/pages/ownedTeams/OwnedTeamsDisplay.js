import React from 'react';
import moment from 'moment';
import { Translate } from 'react-redux-i18n';

import TextField from '../../fields/textField/TextField';
import CheckboxField from '../../fields/checkboxField/CheckboxField';
import Grid from '../../fields/Grid';

export const gridPageProps = props => ({
  noDataText: <Translate value="profile.noTeams" />,
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
      Header: <Translate value="profile.nameColumn" />,
      id: 'name',
      accessor: 'name',
    },
    {
      Header: <Translate value="profile.membersColumn" />,
      id: 'members',
      accessor: 'members.length',
    },
    {
      Header: <Translate value="profile.createDateColumn" />,
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
        <div className="label">
          <Translate value="profile.teamName" />
        </div>
        <TextField value={props.newTeamName} onChange={props.setNewTeamName} />
      </div>
      <button
        className="button-primary"
        onClick={() => props.createTeam(props.newTeamName)}
      >
        <Translate value="profile.createTeamButtonText" />
      </button>
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
