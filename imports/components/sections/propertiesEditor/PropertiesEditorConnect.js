import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }, ownProps) => {
  const props = {};
  ownProps.properties.forEach(
    (property, index) =>
      (props[property.name] = objectEditor[property.name] || '')
  );
  props.loadedValues = ownProps.loadedValues;
  props.numEditedProperties = 0;
  props.isEditingProperties =
    objectEditor.hasLoaded &&
    ownProps.properties.reduce((prev, property) => {
      let diff = false;
      if (
        props[property.name] !== (ownProps.loadedValues[property.name] || '')
      ) {
        diff = true;
        props.numEditedProperties += 1;
      }
      if (prev || diff) {
        return true;
      }
      return false;
    }, false);
  props.hasLoaded = objectEditor.hasLoaded || false;
  return props;
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setProperty: (property, value) =>
    dispatch(setObjectEditorProp(property, value)),
  setHasLoaded: value => dispatch(setObjectEditorProp('hasLoaded', value)),
  setLoadedValues: value =>
    dispatch(setObjectEditorProp('loadedValues', value)),
  save: value => {
    Meteor.call(
      ownProps.savePropertiesMethod,
      ownProps.match.params[ownProps.uriID],
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
  cancelEdit: () => {
    ownProps.properties.forEach(property =>
      ownProps.setProperty(property.name, ownProps.loadedValues[property.name])
    );
  },
});

const PropertiesEditorConnect = connect(mapStateToProps, mapDispatchToProps);

export default PropertiesEditorConnect;
