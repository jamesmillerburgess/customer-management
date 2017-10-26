import React from 'react';

// Fields
import DateField from '../../fields/dateField/DateField';
import OptionField from '../../fields/optionField/OptionField';
import TextField from '../../fields/textField/TextField';

// Sections
import InteractionButtons from './InteractionButtons';

const InteractionDisplay = props => {
  const confirm = () =>
    props.logInteraction({
      time: props.time,
      outcome: props.outcome,
      text: props.text,
      quoteNumber: props.quoteNumber,
    });

  return (
    <div className="interaction">
      {(props.hasTime || props.hasOutcome || props.hasQuoteNumber) && (
        <div className="input-row">
          {props.hasTime && (
            <div className="input-group">
              <span className="label">Date and time</span>
              <DateField
                timeFormat
                value={props.time}
                onChange={props.setTime}
              />
            </div>
          )}
          {props.hasOutcome && (
            <div className="input-group">
              <span className="label">Outcome</span>
              <OptionField
                value={props.outcome}
                onChange={props.setOutcome}
                placeholder="Select an outcome..."
                options={[
                  { value: null, label: '' },
                  { value: 'NO_ANSWER', label: 'No answer' },
                  { value: 'BUSY', label: 'Busy' },
                  { value: 'WRONG_NUMBER', label: 'Wrong number' },
                  { value: 'LEFT_LIVE_MESSAGE', label: 'Left live message' },
                  { value: 'LEFT_VOICEMAIL', label: 'Left voicemail' },
                  { value: 'CONNECTED', label: 'Connected' },
                ]}
              />
            </div>
          )}
          {props.hasQuoteNumber && (
            <div className="input-group">
              <span className="label">Quote Number</span>
              <TextField
                value={props.quoteNumber}
                onChange={props.setQuoteNumber}
                placeholder="QT-99999-AABBB"
              />
            </div>
          )}
        </div>
      )}
      <textarea
        value={props.text}
        onChange={e => props.setText(e.target.value)}
        placeholder={props.textPlaceholder}
      />
      <InteractionButtons
        isWriting={props.isWriting}
        confirmText={props.confirmText}
        onConfirm={confirm}
        onCancel={props.cancelInteraction}
      />
    </div>
  );
};

export default InteractionDisplay;
