import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddCompanyDisplay from './AddCompanyDisplay';

import { setAppProp } from '../../../state/actions/appActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  closeOverlay: () => dispatch(setAppProp('isOverlayOpen', false)),
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddCompanyDisplay
);

export default AddCompanyConnect;
