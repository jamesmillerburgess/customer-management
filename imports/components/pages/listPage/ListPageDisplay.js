import React from 'react';

import PageHeader from '../PageHeader';
import GridPage from '../GridPage';

const ListPageDisplay = props => (
  <div>
    <PageHeader
      title={props.title}
      searchPlaceholder={props.searchPlaceholder}
      addButtonText={props.addButtonText}
      onClickAdd={props.openOverlay}
    />
    <GridPage
      tableId={props.tableId}
      {...props.gridPageProps(props.items)}
      data={props.loading ? [] : props.items}
      match={props.match}
    />
  </div>
);

ListPageDisplay.defaultProps = { items: [] };

export default ListPageDisplay;
