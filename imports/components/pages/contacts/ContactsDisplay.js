import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';
import GridPage from '../GridPage';

const headerProps = {
  title: 'Contacts',
  search: 'Search for a contact',
  add: 'Add contact',
};

export const gridPageProps = contacts => ({
  sidebarHeader: 'All contacts',
  noRows: 'No contacts yet!',
  columns: [
    {
      width: 45,
      resizable: false,
      sortable: false,
    },
    {
      Header: 'Name',
      id: 'name',
      accessor: 'name',
      Cell: props => (
        <Link to={`/contacts/${contacts[props.index]._id}`}>{props.value}</Link>
      ),
    },
    {
      Header: 'Create Date',
      id: 'lastName',
      accessor: 'createDate',
      Cell: props => (
        <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
      ),
    },
  ],
});

const ContactsDisplay = props => (
  <div>
    <PageHeader {...headerProps} onClickAdd={props.openOverlay} />
    <GridPage
      {...gridPageProps(props.contacts)}
      data={props.loading ? [] : props.contacts}
      match={props.match}
    />
  </div>
);

ContactsDisplay.defaultProps = { contacts: [] };

export default ContactsDisplay;
