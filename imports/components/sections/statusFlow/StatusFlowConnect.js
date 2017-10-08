import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = (state, ownProps) => {
  const statusIndex = _.findIndex(
    o => o.value === ownProps.status,
    ownProps.statuses
  );
  return { statusIndex };
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  updateStatus: status =>
    Meteor.call(
      ownProps.updateStatusMethod,
      ownProps.match.params[ownProps.uriID],
      { status, id: new Mongo.ObjectID()._str }
    ),
});

const PropertiesEditorConnect = connect(mapStateToProps, mapDispatchToProps);

export default PropertiesEditorConnect;
