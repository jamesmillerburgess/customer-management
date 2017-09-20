import React from 'react';
import Grid from '../fields/Grid';
import './GridPage.scss';

import SearchInput from '../fields/SearchInput';
import ObjectLink from '../nav/ObjectLink';

const GridPage = ({ sidebarHeader, noRows, data }) => (
  <div className="section-body">
    <div className="sidebar">
      <ul>
        <li className="sidebar-header">{sidebarHeader}</li>
      </ul>
    </div>
    <div className="content">
      <Grid
        data={data}
        columns={[
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
        ]}
        noDataText={noRows}
      />
    </div>
  </div>
);

export default GridPage;
