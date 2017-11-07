import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

import AddObjectDisplay from './AddObjectDisplay';
import FieldLists from '../../api/fieldList/fieldListCollection';

import { setOverlayProp } from '../../state/actions/overlayActionCreators';
import { setAppProp } from '../../state/actions/appActionCreators';

export const mapStateToProps = ({ app, overlay }, ownProps) => {
  const { errorMessage, showErrorMessage } = overlay;
  const { fields } = FieldLists.findOne({ page: ownProps.page }) || {
    fields: [],
  };
  return {
    place: overlay.place,
    parsedPlace: overlay.parsedPlace,
    fields: fields.map(
      field => ({ ...field, value: overlay[field.name] || field.default }),
      {}
    ),
    errorMessage,
    errorMessageClass: showErrorMessage ? 'show' : 'hide',
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setProp: (prop, value) => dispatch(setOverlayProp(prop, value)),
  closeOverlay: () => dispatch(setAppProp('isOverlayOpen', false)),
  create: object => {
    try {
      const id = Meteor.apply(
        ownProps.createMethod,
        [object, new Mongo.ObjectID()._str],
        {
          returnStubValue: true,
          throwStubExceptions: true,
        }
      );
      dispatch(setAppProp('isOverlayOpen', false));
      ownProps.history.push(`/${ownProps.pathPrefix}/${id}`);
    } catch (e) {
      dispatch(setOverlayProp('errorMessage', e.message));
      dispatch(setOverlayProp('showErrorMessage', true));
      setTimeout(
        () => dispatch(setOverlayProp('showErrorMessage', false)),
        5000
      );
    }
  },
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddObjectDisplay
);

export default AddCompanyConnect;
