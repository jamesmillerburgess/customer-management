import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';

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
              <span className="label">
                <Translate value="interaction.dateAndTime" />
              </span>
              <DateField
                timeFormat
                value={props.time}
                onChange={props.setTime}
              />
            </div>
          )}
          {props.hasOutcome && (
            <div className="input-group">
              <span className="label">
                <Translate value="interaction.outcome" />
              </span>
              <OptionField
                value={props.outcome}
                onChange={props.setOutcome}
                placeholder={I18n.t('interaction.outcomePlaceholder')}
                options={[
                  { value: null, label: 'interaction.outcomePlaceholder' },
                  {
                    value: 'NO_ANSWER',
                    label: 'callOutcomes.NO_ANSWER',
                  },
                  { value: 'BUSY', label: 'callOutcomes.BUSY' },
                  {
                    value: 'WRONG_NUMBER',
                    label: 'callOutcomes.WRONG_NUMBER',
                  },
                  {
                    value: 'LEFT_LIVE_MESSAGE',
                    label: 'callOutcomes.LEFT_LIVE_MESSAGE',
                  },
                  {
                    value: 'LEFT_VOICEMAIL',
                    label: 'callOutcomes.LEFT_VOICEMAIL',
                  },
                  {
                    value: 'CONNECTED',
                    label: 'callOutcomes.CONNECTED',
                  },
                ]}
              />
            </div>
          )}
          {props.hasQuoteNumber && (
            <div className="input-group">
              <span className="label">
                <Translate value="interaction.quoteNumber" />
              </span>
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
