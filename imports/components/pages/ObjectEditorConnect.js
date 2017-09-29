import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setObjectEditorProp } from '../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }, ownProps) => {
  const props = {};
  ownProps.fields.forEach(
    (field, index) =>
      (props[field.property] = objectEditor[field.property] || '')
  );
  props.loadedValues = objectEditor.loadedValues;
  props.numEditedProperties = 0;
  props.isEditingProperties =
    objectEditor.hasLoaded &&
    ownProps.fields.reduce((prev, field) => {
      let diff = false;
      if (
        props[field.property] !==
        (objectEditor.loadedValues[field.property] || '')
      ) {
        diff = true;
        props.numEditedProperties += 1;
      }
      if (prev || diff) {
        return true;
      }
      return false;
    }, false);
  props.note = objectEditor.note || '';
  props.isWritingNote = objectEditor.note ? true : false;
  props.hasLoaded = objectEditor.hasLoaded || false;
  return props;
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setProperty: (property, value) =>
    dispatch(setObjectEditorProp(property, value)),
  setNote: value => dispatch(setObjectEditorProp('note', value)),
  addNote: value => {
    Meteor.call(
      ownProps.addNoteMethod,
      ownProps.match.params[ownProps.uriID],
      value,
      (err, res) => {
        if (!err) {
          dispatch(setObjectEditorProp('note', ''));
        } else {
          console.log(err);
        }
      }
    );
  },
  cancelNote: () => {
    dispatch(setObjectEditorProp('note', ''));
    dispatch(setObjectEditorProp('isWritingNote', false));
  },
  setHasLoaded: value => dispatch(setObjectEditorProp('hasLoaded', value)),
  setLoadedValues: value =>
    dispatch(setObjectEditorProp('loadedValues', value)),
  save: value => {
    Meteor.call(
      ownProps.saveMethod,
      ownProps.match.params.companyId,
      value,
      (err, res) => {
        if (!err) {
          dispatch(setObjectEditorProp('hasLoaded', false));
        } else {
          console.log(err);
        }
      }
    );
  },
  cancelEditProperties: () => {
    dispatch(setObjectEditorProp('hasLoaded', false));
  },
});

const ObjectEditorConnect = connect(mapStateToProps, mapDispatchToProps);

export default ObjectEditorConnect;
