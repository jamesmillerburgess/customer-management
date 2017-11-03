import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const DataTableDisplay = props => (
  <ReactTable {...props} minRows={1} showPagination={false} />
);

export default DataTableDisplay;
