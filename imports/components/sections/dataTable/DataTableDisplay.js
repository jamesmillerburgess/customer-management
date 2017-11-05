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
    <div
      className={`button-footer ${props.areAnySelected
        ? 'expanded'
        : 'expandable'}`}
      style={{
        height: props.areAnySelected ? '90px' : '0px',
      }}
    >
      <div className="button-group">
        <button
          className="button-secondary"
          onClick={() => props.deleteRowSelection(props.rowSelection)}
        >
          <Translate value="tableEditor.delete" />
        </button>
        <div className="edited-properties">
          {props.numSelectedRows === 1 ? (
            <Translate value="tableEditor.singularSelectedText" />
          ) : (
            <Translate
              value="tableEditor.pluralSelectedText"
              numSelectedRows={props.numSelectedRows}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default DataTableDisplay;
