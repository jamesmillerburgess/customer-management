import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createSelector } from 'reselect';

import DataTableDisplay from './DataTableDisplay';
import { setDataTablesProp } from '../../../state/actions/dataTablesActionCreators';

// Check the current path in the dataTables property of the state. This will
// only work if there is a single table on a page. Otherwise we need a different
// identifier for the table properties.
const getRowSelection = (state, tableId) =>
  ((state.dataTables || {})[tableId] || {}).rowSelection || [];

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
const getAreAllSelected = (rowSelection, visibleRows) =>
  (visibleRows || []).length > 0 &&
  visibleRows.reduce((prev, curr, i) => prev && rowSelection[curr._id], true);

// This could probably be optimized in a reselect selector, but the dependency
// on props complicates the implementation and would force us to use a
// `makeMapStateToProps` generator to ensure different selectors for each table.
export const mapStateToProps = (state, ownProps) => {
  // Get rowSelection first, since it is a dependency for the other props
  const rowSelection = getRowSelection(state, ownProps.tableId);
  return {
    rowSelection,
    areAnySelected: getAreAnySelected(rowSelection),
    numSelectedRows: getNumSelectedRows(rowSelection),
    areAllSelected: getAreAllSelected(rowSelection, ownProps.visibleRows),
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
  };
};

const DataTableConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DataTableDisplay)
);

export default DataTableConnect;
