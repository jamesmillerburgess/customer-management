import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import ListPageConnect from '../listPage/ListPageConnect';
import Companies from '../../../api/company/companyCollection';

const companyListProps = {
  subscription: 'company.user',
  collection: Companies,
  title: 'Companies',
  searchPlaceholder: 'Search for a company',
  addButtonText: 'Add company',
  gridPageProps: companies => ({
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
        Header: 'Create Date',
        id: 'lastName',
        accessor: 'createDate',
        Cell: props => (
          <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
        ),
      },
    ],
  }),
};

const CompanyList = props => (
  <ListPageConnect {...props} {...companyListProps} />
);

export default CompanyList;
