import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListPageSideBarDisplay from './ListPageSidebarDisplay';
import { setFiltersProp } from '../../../state/actions/filtersActionCreators';

const getFilter = (state, ownProps) =>
  state.filters[ownProps.tableId] || 'SELF';

export const mapStateToProps = (state, ownProps) => ({
  filter: getFilter(state, ownProps),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: value => dispatch(setFiltersProp(ownProps.tableId, value)),
});

const ListPageSidebarConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListPageSideBarDisplay)
);

export default ListPageSidebarConnect;
