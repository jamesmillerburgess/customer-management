import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListPageSideBarDisplay from './ListPageSidebarDisplay';
import { setFiltersProp } from '../../../state/actions/filtersActionCreators';

const getFilter = (state, path) => state.filters[path] || '';

export const mapStateToProps = (state, ownProps) => ({
  filter: getFilter(state, ownProps.match.path),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: value => dispatch(setFiltersProp(ownProps.match.path, value)),
});

const ListPageSidebarConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListPageSideBarDisplay)
);

export default ListPageSidebarConnect;
