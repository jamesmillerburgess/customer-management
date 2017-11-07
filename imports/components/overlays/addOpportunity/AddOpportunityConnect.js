import { connect } from 'react-redux';

import AddOpportunityDisplay from './AddOpportunityDisplay';

export const mapStateToProps = (state, ownProps) => ({});
export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AddOpportunityConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddOpportunityDisplay
);

export default AddOpportunityConnect;
