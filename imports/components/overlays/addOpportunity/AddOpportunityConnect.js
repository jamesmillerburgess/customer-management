import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddObjectDisplay from '../AddObjectDisplay';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { addOpportunityFields } from './AddOpportunityConstants';

export const mapStateToProps = ({ overlay }) => {
  return addOpportunityFields.reduce(
    (prev, field) => ({
      ...prev,
      [field.prop]: overlay[field.prop] || field.default,
    }),
    {}
  );
};

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
      // ownProps.history.push(`/opportunities/${res}`);
    }),
});

const AddOpportunityConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddObjectDisplay
);

export default AddOpportunityConnect;
