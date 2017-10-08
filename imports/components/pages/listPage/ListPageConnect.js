import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

import ListPageContainer from './ListPageContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { clearOverlayProps } from '../../../state/actions/overlayActionCreators';

export const generateListPageProps = (singular, plural, collection) => ({
  subscription: `${singular}.user`,
  collection,
  title: plural[0].toUpperCase() + plural.slice(1),
  searchPlaceholder: `Search for ${plural}`,
  addButtonText: `Add ${singular}`,
  gridPageProps: items => ({
    sidebarHeader: `All ${plural}`,
    noRows: `No ${plural} yet!`,
    columns: [
      {
        width: 45,
        resizable: false,
        sortable: false,
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: 'name',
        Cell: props => (
          <Link to={`/${plural}/${items[props.index]._id}`}>{props.value}</Link>
        ),
      },
      {
        Header: 'Create Date',
        id: 'createDate',
        accessor: 'createDate',
        Cell: props => (
          <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
        ),
      },
    ],
  }),
});

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  openOverlay: () => {
    dispatch(setAppProp('isOverlayOpen', true));
    dispatch(setAppProp('overlay', ownProps.overlay));
    dispatch(clearOverlayProps());
  },
});

const ListPageConnect = connect(mapStateToProps, mapDispatchToProps)(
  ListPageContainer
);

export default ListPageConnect;
