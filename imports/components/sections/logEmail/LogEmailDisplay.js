import React from 'react';

// Fields
import DateField from '../../fields/dateField/DateField';
import OptionField from '../../fields/optionField/OptionField';

// Sections
import InteractionButtons from '../interactionButtons/InteractionButtons';

const LogEmailDisplay = props => {
  return (
    <div className="interaction">
      <div className="input-row">
        <div className="input-group">
          <span className="label">Date and time</span>
          <DateField
            timeFormat
            value={props.emailTime}
            onChange={props.setEmailTime}
          />
        </div>
      </div>
      <textarea
        id="email"
        value={props.emailText}
        onChange={e => props.setEmailText(e.target.value)}
        placeholder="Start typing to describe an email..."
      />
      <InteractionButtons
        isWriting={props.isWritingEmail}
        confirmText="Log email"
        onConfirm={() =>
          props.logEmail({
            time: props.emailTime,
            text: props.emailText,
          })}
        onCancel={props.cancelEmail}
      />
    </div>
  );
};

export default LogEmailDisplay;
