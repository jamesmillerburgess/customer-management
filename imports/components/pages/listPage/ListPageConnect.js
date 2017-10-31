import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { Translate, Localize } from 'react-redux-i18n';

import ListPageContainer from './ListPageContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { clearOverlayProps } from '../../../state/actions/overlayActionCreators';

export const generateListPageProps = (singular, plural, collection) => ({
  path: `/${plural}`,
  subscription: `${singular}.user`,
  collection,
  title: <Translate value={`${plural}.title`} />,
  searchPlaceholder: `Search for ${plural}`,
  addButtonText: <Translate value={`${plural}.addButtonText`} />,
  gridPageProps: items => ({
    sidebarHeader: <Translate value={`${plural}.allSidebarText`} />,
    noDataText: <Translate value={`${plural}.noDataText`} />,
    columns: [
      {
        width: 45,
        resizable: false,
        sortable: false,
      },
      {
        Header: <Translate value={`${plural}.nameColumn`} />,
        id: 'name',
        accessor: 'name',
        Cell: props => (
          <Link to={`/${plural}/${items[props.index]._id}`}>{props.value}</Link>
        ),
      },
      {
        Header: <Translate value={`${plural}.createDateColumn`} />,
        id: 'createDate',
        accessor: 'createDate',
        Cell: props => (
          <span>
            <Localize value={props.value} dateFormat={`${plural}.dateFormat`} />
          </span>
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
