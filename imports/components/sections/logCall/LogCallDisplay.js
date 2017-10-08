import React from 'react';

// Fields
import DateField from '../../fields/dateField/DateField';
import OptionField from '../../fields/optionField/OptionField';

// Sections
import InteractionButtons from '../interactionButtons/InteractionButtons';

const LogCallDisplay = props => {
  return (
    <div className="interaction">
      <div className="input-row">
        <div className="input-group">
          <span className="label">Date and time</span>
          <DateField
            timeFormat
            value={props.callTime}
            onChange={props.setCallTime}
          />
        </div>
        <div className="input-group">
          <span className="label">Outcome</span>
          <OptionField
            value={props.callOutcome}
            onChange={props.setCallOutcome}
            placeholder="Select an outcome..."
            options={[
              { value: 'NO_ANSWER', label: 'No answer' },
              { value: 'BUSY', label: 'Busy' },
              { value: 'WRONG_NUMBER', label: 'Wrong number' },
              { value: 'LEFT_LIVE_MESSAGE', label: 'Left live message' },
              { value: 'LEFT_VOICEMAIL', label: 'Left voicemail' },
              { value: 'CONNECTED', label: 'Connected' },
            ]}
          />
        </div>
      </div>
      <textarea
        id="call"
        value={props.callText}
        onChange={e => props.setCallText(e.target.value)}
        placeholder="Start typing to describe a call..."
      />
      <InteractionButtons
        isWriting={props.isWritingCall}
        confirmText="Log call"
        onConfirm={() =>
          props.logCall({
            callTime: props.callTime,
            callOutcome: props.callOutcome,
            callText: props.callText,
          })}
        onCancel={props.cancelCall}
      />
    </div>
  );
};

export default LogCallDisplay;
