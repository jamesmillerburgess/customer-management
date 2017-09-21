import React from 'react';
import moment from 'moment';

import PageHeader from './PageHeader';
import GridPage from './GridPage';

const headerProps = {
  title: 'Contacts',
  search: 'Search for a contact',
  add: 'Add contact',
};

const gridPageProps = {
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
    },
    {
      Header: 'Email',
      id: 'email',
      accessor: 'email',
    },
    {
      Header: 'Contact Owner',
      id: 'contactOwner',
      accessor: 'contactOwner',
    },
    {
      Header: 'Phone Number',
      id: 'phoneNumber',
      accessor: 'phoneNumber',
    },
    {
      Header: 'Lead Status',
      id: 'leadStatus',
      accessor: 'leadStatus',
    },
    {
      Header: 'Create Date (GMT+2)',
      id: 'lastName',
      accessor: 'createDate',
    },
  ],
  data: [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contactOwner: '-',
      phoneNumber: '-',
      leadStatus: '-',
      createDate: moment('2017-09-16').format('MMM DD, YYYY'),
    },
  ],
};

const Contacts = () => (
  <div>
    <PageHeader {...headerProps} />
    <GridPage {...gridPageProps} />
  </div>
);

export default Contacts;
