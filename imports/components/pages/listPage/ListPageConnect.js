import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { Translate, Localize } from 'react-redux-i18n';

import ListPageContainer from './ListPageContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { clearOverlayProps } from '../../../state/actions/overlayActionCreators';
import AvatarField from '../../fields/avatarField/AvatarField';
import CheckboxField from '../../fields/checkboxField/CheckboxField';
import Teams from '../../../api/team/teamCollection';

export const checkboxColumn = props => ({
  width: 45,
  resizable: false,
  sortable: false,
  Header: cellProps => (
    <CheckboxField
      value={props.areAllSelected}
      onChange={value =>
        props.setAllRowSelection(
          cellProps.data.reduce(
            (prev, curr) => ({
              ...prev,
              [curr._original._id]: value,
            }),
            {}
          )
        )}
    />
  ),
  Cell: cellProps => (
    <CheckboxField
      value={props.rowSelection[cellProps.original._id]}
      onChange={value => props.setRowSelection(cellProps.original._id, value)}
    />
  ),
});

export const generateListPageProps = (singular, plural, collection) => ({
  tableId: singular,
  path: `/${plural}`,
  subscription: `${singular}.user`,
  collection,
  title: <Translate value={`${plural}.title`} />,
  searchPlaceholder: `Search for ${plural}`,
  addButtonText: <Translate value={`${plural}.addButtonText`} />,
  gridPageProps: props => ({
    sidebarHeader: <Translate value={`${plural}.allSidebarText`} />,
    noDataText: <Translate value={`${plural}.noDataText`} />,
    columns: [
      checkboxColumn(props),
      {
        Header: <Translate value={`${plural}.nameColumn`} />,
        id: 'name',
        accessor: 'name',
        Cell: cellProps => (
          <div className="name-cell">
            <AvatarField
              className="avatar"
              publicId={
                cellProps.original.avatarURL ||
                (plural === 'contacts'
                  ? 'empty-profile-pic_wqnyvm.png'
                  : 'empty-company-pic_uokzyz')
              }
              height={32}
              width={32}
            />
            <Link to={`/${plural}/${props.data[cellProps.index]._id}`}>
              {cellProps.value}
            </Link>
          </div>
        ),
      },
      {
        Header: <Translate value={`${plural}.owner`} />,
        id: 'owner',
        accessor: 'users.0',
        Cell: cellProps => (
          <div className="name-cell">
            <AvatarField
              className="avatar"
              publicId={
                ((Meteor.users.findOne(cellProps.value) || {}).profile || {})
                  .avatarURL || 'empty-profile-pic_wqnyvm.png'
              }
              height={32}
              width={32}
            />
            <Link to={`/${plural}/${props.data[cellProps.index]._id}`}>
              {(Meteor.users.findOne(cellProps.value) || {}).username}
            </Link>
          </div>
        ),
      },
    ],
  }),
});

export const getOwnerFilter = (state, ownProps) =>
  (((state || {}).dataTables || {})[(ownProps || {}).tableId] || {})
    .ownerFilter;
export const getPageNumber = (state, ownProps) =>
  (((state || {}).dataTables || {})[(ownProps || {}).tableId] || {})
    .pageNumber || 0;
export const getShowArchived = (state = {}, ownProps = {}) =>
  ((state.dataTables || {})[ownProps.tableId] || '').showArchived || false;

export const mapStateToProps = (state, ownProps) => ({
  ownerFilter: getOwnerFilter(state, ownProps),
  pageNumber: getPageNumber(state, ownProps),
  showArchived: getShowArchived(state, ownProps),
});

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
