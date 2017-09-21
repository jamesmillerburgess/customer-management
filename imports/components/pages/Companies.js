import React from 'react';
import moment from 'moment';

import PageHeader from './PageHeader';
import GridPage from './GridPage';

const headerProps = {
  title: 'Companies',
  search: 'Search for a company',
  add: 'Add company',
};

const gridPageProps = {
  sidebarHeader: 'All companies',
  noRows: 'No companies yet!',
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
      Header: 'Create Date (GMT+2)',
      id: 'lastName',
      accessor: 'createDate',
    },
    {
      Header: 'First Contact Create Date (GMT+2)',
      accessor: 'firstContactCreateDate',
    },
  ],
  data: [
    {
      name: 'Name',
      createDate: moment('2017-09-16').format('MMM DD, YYYY'),
      firstContactCreateDate: '-',
    },
    {
      name: 'ABC Widgets',
      createDate: moment('2017-09-16').format('MMM DD, YYYY'),
      firstContactCreateDate: moment('2017-09-16').format('MMM DD, YYYY'),
    },
  ],
};

const Companies = () => (
  <div>
    <PageHeader {...headerProps} />
    <GridPage {...gridPageProps} />
  </div>
);

export default Companies;
