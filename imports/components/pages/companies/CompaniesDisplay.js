import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';
import GridPage from '../GridPage';

const headerProps = {
  title: 'Companies',
  search: 'Search for a company',
  add: 'Add company',
};

export const gridPageProps = companies => ({
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
      Cell: props => (
        <Link to={`/companies/${companies[props.index]._id}`}>
          {props.value}
        </Link>
      ),
    },
    {
      Header: 'Create Date (GMT+2)',
      id: 'lastName',
      accessor: 'createDate',
      Cell: props => (
        <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
      ),
    },
    {
      Header: 'First Contact Create Date (GMT+2)',
      accessor: 'firstContactCreateDate',
    },
  ],
});

const CompaniesDisplay = props => (
  <div>
    <PageHeader
      {...headerProps}
      onClickAdd={() => props.setIsOverlayOpen(true)}
    />
    <GridPage
      {...gridPageProps(props.companies.reverse())}
      data={props.loading ? [] : props.companies}
      match={props.match}
    />
  </div>
);

CompaniesDisplay.defaultProps = { companies: [] };

export default CompaniesDisplay;
