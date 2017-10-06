import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import AddObjectDisplay from '../AddObjectDisplay';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { addContactFields } from '../AddObjectConstants';

export const mapStateToProps = ({ overlay }) => {
  return addContactFields.reduce(
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
  create: contact =>
    Meteor.call('contact.create', contact, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(setAppProp('isOverlayOpen', false));
      ownProps.history.push(`/contacts/${res}`);
    }),
});

const AddContactConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddObjectDisplay
);

export default AddContactConnect;
