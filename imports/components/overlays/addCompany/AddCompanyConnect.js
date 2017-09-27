import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddCompanyDisplay from './AddCompanyDisplay';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

export const mapStateToProps = ({ overlay }) => ({
  name: overlay.name || '',
  website: overlay.website || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setName: value => dispatch(setOverlayProp('name', value)),
  setWebsite: value => dispatch(setOverlayProp('website', value)),
  closeOverlay: () => dispatch(setAppProp('isOverlayOpen', false)),
  create: company =>
    Meteor.call('company.create', company, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(setAppProp('isOverlayOpen', false));
      ownProps.history.push(`/companies/${res}`);
    }),
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddCompanyDisplay
);

export default AddCompanyConnect;
