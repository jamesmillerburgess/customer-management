import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddObjectDisplay from './AddObjectDisplay';
import FieldLists from '../../api/fieldList/fieldListCollection';

import { setOverlayProp } from '../../state/actions/overlayActionCreators';
import { setAppProp } from '../../state/actions/appActionCreators';

export const mapStateToProps = ({ overlay }, ownProps) => {
  const { fields } = FieldLists.findOne({ page: ownProps.page }) || {
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
  create: company =>
    Meteor.call(ownProps.createMethod, company, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(setAppProp('isOverlayOpen', false));
      ownProps.history.push(`/${ownProps.pathPrefix}/${res}`);
    }),
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddObjectDisplay
);

export default AddCompanyConnect;