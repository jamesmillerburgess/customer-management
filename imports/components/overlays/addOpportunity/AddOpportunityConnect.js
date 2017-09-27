import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddOpportunityDisplay from './AddOpportunityDisplay';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

import { addOpportunityFields } from './AddOpportunityConstants';

export const mapStateToProps = ({ overlay }) =>
  addOpportunityFields.reduce(
    (prev, { prop }) => ({
      ...prev,
      [prop]: overlay[prop] || '',
    }),
    {}
  );

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setProp: (prop, value) => dispatch(setOverlayProp(prop, value)),
  closeOverlay: () => dispatch(setAppProp('isOverlayOpen', false)),
  create: opportunity =>
    Meteor.call('opportunity.create', opportunity, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(setAppProp('isOverlayOpen', false));
      // ownProps.history.push(`/companies/${res}`);
    }),
});

const AddOpportunityConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddOpportunityDisplay
);

export default AddOpportunityConnect;
