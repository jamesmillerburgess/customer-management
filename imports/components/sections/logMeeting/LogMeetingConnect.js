import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import LogMeetingDisplay from './LogMeetingDisplay';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }) => ({
  meetingText: objectEditor.meetingText || '',
  isWritingMeeting: objectEditor.meetingText ? true : false,
  meetingTime: objectEditor.meetingTime || new Date(),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setMeetingText: value => dispatch(setObjectEditorProp('meetingText', value)),
  setMeetingTime: value => dispatch(setObjectEditorProp('meetingTime', value)),
  logMeeting: meeting =>
    Meteor.call(
      ownProps.logMeetingMethod,
      ownProps.match.params[ownProps.uriID],
      { ...meeting, id: new Mongo.ObjectID()._str },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        dispatch(setObjectEditorProp('meetingText', ''));
        dispatch(setObjectEditorProp('meetingTime', ''));
      }
    ),
  cancelMeeting: () => {
    dispatch(setObjectEditorProp('meetingText', ''));
    dispatch(setObjectEditorProp('meetingTime', new Date()));
  },
});

const InteractionMenuConnect = connect(mapStateToProps, mapDispatchToProps)(
  LogMeetingDisplay
);

export default InteractionMenuConnect;
