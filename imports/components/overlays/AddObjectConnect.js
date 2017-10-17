import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
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
  create: company => {
    const id = Meteor.apply(
      ownProps.createMethod,
      [company, new Mongo.ObjectID()._str],
      {
        returnStubValue: true,
      }
    );
    dispatch(setAppProp('isOverlayOpen', false));
    ownProps.history.push(`/${ownProps.pathPrefix}/${id}`);
  },
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddObjectDisplay
);

export default AddCompanyConnect;
