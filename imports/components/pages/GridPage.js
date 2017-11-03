import React from 'react';
import Grid from '../sections/dataTable/DataTable';
import './GridPage.scss';

import ListPageSidebar from '../sections/listPageSidebar/ListPageSidebar';
import SearchInput from '../fields/SearchInput';
import ObjectLink from '../nav/ObjectLink';

const GridPage = props => (
  <div className="section-body">
    <div className="sidebar">
      <ListPageSidebar tableId={props.tableId} />
    </div>
    <div className="content">
      <Grid
        data={props.data}
        columns={props.columns}
        noDataText={props.noDataText}
      />
    </div>
  </div>
);

export default GridPage;
