import { connect } from 'react-redux';

import AddContactDisplay from './AddContactDisplay';

export const mapStateToProps = (state, ownProps) => ({});
export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AddContactConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddContactDisplay
);

export default AddContactConnect;
