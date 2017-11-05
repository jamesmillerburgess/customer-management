import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createSelector } from 'reselect';

import DataTableDisplay from './DataTableDisplay';
import { setDataTablesProp } from '../../../state/actions/dataTablesActionCreators';

const getPageNumber = (state, ownProps) =>
  ((state.dataTables || {})[ownProps.tableId] || {}).pageNumber || 0;

const getVisibleRows = (pageNumber, ownProps) => {
  const min = pageNumber === 0 ? 0 : 10;
  const max = min + 10;
  return ownProps.data.filter((row, i) => i >= min && i < max);
};

// Check the current path in the dataTables property of the state. This will
// only work if there is a single table on a page. Otherwise we need a different
// identifier for the table properties.
const getRowSelection = (state, ownProps) =>
  ((state.dataTables || {})[ownProps.tableId] || {}).rowSelection || [];

// Check if any in the rows are selected (i.e. any element of the array is true)
const getAreAnySelected = rowSelection =>
  Object.keys(rowSelection).reduce(
    (prev, curr) => prev || rowSelection[curr],
    false
  );

// Count the number of elements in the array that are true
const getNumSelectedRows = rowSelection =>
  Object.keys(rowSelection).reduce(
    (prev, curr) => (rowSelection[curr] ? prev + 1 : prev),
    0
  );

// First, there should be at least one visible row. Second, there should be at
// least one element of the array that is true
const getAreAllSelected = (rowSelection, ownProps) =>
  (ownProps.data || []).length > 0 &&
  ownProps.data.reduce((prev, curr, i) => prev && rowSelection[curr._id], true);

const getDisablePrevButton = pageNumber => pageNumber === 0;

// Check if there are more rows than the ones specified as visible
const getDisableNextButton = (pageNumber, ownProps) => {
  const firstVisibleRow = pageNumber === 0 ? 0 : 10;
  const lastVisibleRow = firstVisibleRow + 10;
  return ownProps.data.length <= lastVisibleRow;
};

// This could probably be optimized in a reselect selector, but the dependency
// on props complicates the implementation and would force us to use a
// `makeMapStateToProps` generator to ensure different selectors for each table.
export const mapStateToProps = (state, ownProps) => {
  const pageNumber = getPageNumber(state, ownProps);
  const visibleRows = getVisibleRows(pageNumber, ownProps);
  // Get rowSelection first, since it is a dependency for the other props
  const rowSelection = getRowSelection(state, ownProps);
  return {
    visibleRows,
    pageNumber,
    rowSelection,
    areAnySelected: getAreAnySelected(rowSelection),
    numSelectedRows: getNumSelectedRows(rowSelection),
    areAllSelected: getAreAllSelected(rowSelection, ownProps),
    disablePrevButton: getDisablePrevButton(pageNumber),
    disableNextButton: getDisableNextButton(pageNumber, ownProps),
  };
};

// When we get to pagination, we need to make sure to reset the row selection
// on change of page
export const mapDispatchToProps = (dispatch, ownProps) => {
  const rowSelectionPath = `${ownProps.tableId}.rowSelection`;
  return {
    setAllRowSelection: value =>
      dispatch(setDataTablesProp(rowSelectionPath, value)),
    setRowSelection: (id, value) =>
      dispatch(setDataTablesProp(`${rowSelectionPath}.${id}`, value)),
    // Remove the selections on callback from the deleteRows prop
    deleteRowSelection: rowSelection =>
      ownProps.deleteRows(rowSelection, () =>
        dispatch(setDataTablesProp(rowSelectionPath, {}))
      ),
    viewPrevPage: pageNumber =>
      dispatch(
        setDataTablesProp(`${ownProps.tableId}.pageNumber`, pageNumber - 1)
      ),
    viewNextPage: pageNumber =>
      dispatch(
        setDataTablesProp(`${ownProps.tableId}.pageNumber`, pageNumber + 1)
      ),
  };
};

const DataTableConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DataTableDisplay)
);

export default DataTableConnect;
