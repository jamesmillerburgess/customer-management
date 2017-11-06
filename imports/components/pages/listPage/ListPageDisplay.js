import React from 'react';

import PageHeader from '../PageHeader';
import GridPage from '../GridPage';
import DataTable from '../../sections/dataTable/DataTable';
import ListPageSidebar from '../../sections/listPageSidebar/ListPageSidebar';

const ListPageDisplay = props => (
  <div>
    <PageHeader
      title={props.title}
      searchPlaceholder={props.searchPlaceholder}
      addButtonText={props.addButtonText}
      onClickAdd={props.openOverlay}
    />
    <div className="section-body">
      <div className="sidebar">
        <ListPageSidebar tableId={props.tableId} />
      </div>
      <div className="content">
        <DataTable
          data={props.loading ? [] : props.data}
          gridPageProps={props.gridPageProps}
          tableId={props.tableId}
          archiveRows={props.archiveObjects}
        />
      </div>
    </div>
  </div>
);

ListPageDisplay.defaultProps = { items: [] };

export default ListPageDisplay;
