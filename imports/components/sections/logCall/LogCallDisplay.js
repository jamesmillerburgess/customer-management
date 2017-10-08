import React from 'react';

// Fields
import DateField from '../../fields/dateField/DateField';
import OptionField from '../../fields/optionField/OptionField';

const LogCallDisplay = props => {
  const call = {};
  if (props.isWritingCall) {
    call.buttonGroupClass = 'expanded';
    call.buttonGroupHeight = '43px';
    call.buttonGroupOpacity = '1';
    call.buttonCursor = 'auto';
    call.primaryButtonOnClick = () => props.addCall(props.call);
    call.secondaryButtonOnClick = props.cancelCall;
  } else {
    call.buttonGroupClass = 'expandable';
    call.buttonGroupHeight = '0px';
    call.buttonGroupOpacity = '0';
    call.buttonCursor = null;
    call.primaryButtonOnClick = null;
    call.secondaryButtonOnClick = null;
  }
  return (
    <div className="interaction">
      <div className="input-row">
        <div className="input-group">
          <span className="label">Date and time</span>
          <DateField value={props.callTime} onChange={props.setCallTime} />
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
      <div
        className={`button-group ${call.buttonGroupClass}`}
        style={{
          height: call.buttonGroupHeight,
          opacity: call.buttonGroupOpacity,
        }}
      >
        <button
          className="button-primary"
          style={{ cursor: call.buttonCursor }}
          onClick={call.primaryButtonOnClick}
        >
          Save call
        </button>
        <button
          className="button-secondary"
          style={{ cursor: call.buttonCursor }}
          onClick={call.secondaryButtonOnClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogCallDisplay;
