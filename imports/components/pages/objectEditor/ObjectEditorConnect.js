import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const generateObjectEditorProps = (singular, plural) => ({
  subscription: `${singular}.single`,
  parentPage: {
    label: plural[0].toUpperCase() + plural.slice(1),
    path: `/${plural}`,
  },
  savePropertiesMethod: `${singular}.saveProperties`,
  addInteractionMethod: `${singular}.addInteraction`,
});

export const mapStateToProps = ({ objectEditor }) => ({
  hasLoaded: objectEditor.hasLoaded || false,
  loadedValues: objectEditor.loadedValues || {},
});

export const mapDispatchToProps = dispatch => ({
  setProperty: (property, value) =>
    dispatch(setObjectEditorProp(property, value)),
  setHasLoaded: value => dispatch(setObjectEditorProp('hasLoaded', value)),
  setLoadedValues: value =>
    dispatch(setObjectEditorProp('loadedValues', value)),
});

const OpportunityContainerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default OpportunityContainerConnect;
