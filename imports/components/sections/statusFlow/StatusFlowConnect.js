import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  updateStatus: status =>
    Meteor.call(
      ownProps.updateStatusMethod,
      ownProps.match.params[ownProps.uriID],
      status
    ),
});

const PropertiesEditorConnect = connect(mapStateToProps, mapDispatchToProps);

export default PropertiesEditorConnect;
