import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import LogCallDisplay from './LogCallDisplay';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }) => ({
  callText: objectEditor.callText || '',
  isWritingCall: objectEditor.callText ? true : false,
  callTime: objectEditor.callTime || new Date(),
  callOutcome: objectEditor.callOutcome || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setCallText: value => dispatch(setObjectEditorProp('callText', value)),
  setCallTime: value => dispatch(setObjectEditorProp('callTime', value)),
  setCallOutcome: value => dispatch(setObjectEditorProp('callOutcome', value)),
  logCall: call =>
    Meteor.call(
      ownProps.logCallMethod,
      ownProps.match.params[ownProps.uriID],
      { ...call, id: new Mongo.ObjectID()._str },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        dispatch(setObjectEditorProp('callText', ''));
        dispatch(setObjectEditorProp('callTime', new Date()));
        dispatch(setObjectEditorProp('callOutcome', ''));
      }
    ),
  cancelCall: () => {
    dispatch(setObjectEditorProp('callText', ''));
    dispatch(setObjectEditorProp('callTime', new Date()));
    dispatch(setObjectEditorProp('callOutcome', ''));
  },
});

const InteractionMenuConnect = connect(mapStateToProps, mapDispatchToProps)(
  LogCallDisplay
);

export default InteractionMenuConnect;
