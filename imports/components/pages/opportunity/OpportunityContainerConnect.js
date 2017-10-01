import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import OpportunityContainer from './OpportunityContainer';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = () => ({});

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
)(OpportunityContainer);

export default OpportunityContainerConnect;
