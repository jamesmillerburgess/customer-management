import React from 'react';
import ReactTable from 'react-table';
import { Meteor } from 'meteor/meteor';
import { Translate } from 'react-redux-i18n';
import 'react-table/react-table.css';

const DataTableDisplay = props => (
  <div>
    <ReactTable
      data={props.visibleRows}
      {...props.gridPageProps(props)}
      minRows={1}
      showPagination={false}
    />
    <div className="table-pagination">
      <button
        className={`button-secondary ${props.disablePrevButton && 'disabled'}`}
        onClick={() =>
          !props.disablePrevButton && props.viewPrevPage(props.pageNumber)}
      >
        <Translate value="dataTable.previous" />
      </button>
      <Translate
        value="dataTable.pagination"
        pageNumber={props.pageNumber + 1}
      />
      <button
        className={`button-secondary ${props.disableNextButton && 'disabled'}`}
        onClick={() =>
          !props.disableNextButton && props.viewNextPage(props.pageNumber)}
      >
        <Translate value="dataTable.next" />
      </button>
    </div>
  </div>
);

export default DataTableDisplay;
