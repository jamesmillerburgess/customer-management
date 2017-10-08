import React from 'react';

// Fields
import DateField from '../../fields/dateField/DateField';
import OptionField from '../../fields/optionField/OptionField';

// Sections
import InteractionButtons from '../interactionButtons/InteractionButtons';

const LogMeetingDisplay = props => {
  return (
    <div className="interaction">
      <div className="input-row">
        <div className="input-group">
          <span className="label">Date and time</span>
          <DateField
            timeFormat
            value={props.meetingTime}
            onChange={props.setMeetingTime}
          />
        </div>
      </div>
      <textarea
        id="meeting"
        value={props.meetingText}
        onChange={e => props.setMeetingText(e.target.value)}
        placeholder="Start typing to describe a meeting..."
      />
      <InteractionButtons
        isWriting={props.isWritingMeeting}
        confirmText="Log meeting"
        onConfirm={() =>
          props.logMeeting({
            meetingTime: props.meetingTime,
            meetingText: props.meetingText,
          })}
        onCancel={props.cancelMeeting}
      />
    </div>
  );
};

export default LogMeetingDisplay;
