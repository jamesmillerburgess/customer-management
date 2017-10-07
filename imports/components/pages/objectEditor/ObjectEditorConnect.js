import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import ObjectEditorContainer from './ObjectEditorContainer';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

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

const ObjectEditorConnect = display =>
  connect(mapStateToProps, mapDispatchToProps)(ObjectEditorContainer(display));

export default ObjectEditorConnect;
