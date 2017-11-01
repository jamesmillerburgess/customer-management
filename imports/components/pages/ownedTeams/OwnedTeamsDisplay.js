import React from 'react';
import moment from 'moment';
import { Translate, Localize } from 'react-redux-i18n';

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
            props.setAllRowSelection(
              cellProps.data.reduce(
                (prev, curr) => ({
                  ...prev,
                  [curr._original._id]: value,
                }),
                {}
              )
            )}
        />
      ),
      Cell: cellProps => (
        <CheckboxField
          value={props.rowSelection[cellProps.original._id]}
          onChange={value =>
            props.setRowSelection(cellProps.original._id, value)}
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
        <Localize value={props.value} dateFormat="dateFieldFormat" />
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
            <Translate value="tableEditor.delete" />
          </button>
          <div className="edited-properties">
            {props.numSelectedRows === 1 ? (
              <Translate value="tableEditor.singularSelectedText" />
            ) : (
              <Translate
                value="tableEditor.pluralSelectedText"
                numSelectedRows={props.numSelectedRows}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OwnedTeamsDisplay;
