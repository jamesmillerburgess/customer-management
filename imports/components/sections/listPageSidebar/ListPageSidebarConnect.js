import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListPageSideBarDisplay from './ListPageSidebarDisplay';
import { setDataTablesProp } from '../../../state/actions/dataTablesActionCreators';

const getOwnerFilter = (state, ownProps) =>
  ((state.dataTables || {})[ownProps.tableId] || {}).ownerFilter || 'SELF';

export const mapStateToProps = (state, ownProps) => ({
  ownerFilter: getOwnerFilter(state, ownProps),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setOwnerFilter: value => {
    dispatch(setDataTablesProp(`${ownProps.tableId}.ownerFilter`, value));
    dispatch(setDataTablesProp(`${ownProps.tableId}.pageNumber`, 0));
  },
});

const ListPageSidebarConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListPageSideBarDisplay)
);

export default ListPageSidebarConnect;
