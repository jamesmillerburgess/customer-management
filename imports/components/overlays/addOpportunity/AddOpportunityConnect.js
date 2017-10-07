import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddObjectDisplay from '../AddObjectDisplay';
import FieldLists from '../../../api/fieldList/fieldListCollection';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

export const mapStateToProps = ({ overlay }) => {
  const { fields } = FieldLists.findOne({ page: 'ADD_OPPORTUNITY' }) || {
    fields: [],
  };
  return {
    fields: fields.map(
      field => ({ ...field, value: overlay[field.name] || field.default }),
      {}
    ),
  };
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
