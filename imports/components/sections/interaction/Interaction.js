import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';

import InteractionConnect from './InteractionConnect';

export const getInteractionProps = props => {
  const uriID = props.uriID;
  switch (props.activeInteraction) {
    case 'NEW_NOTE':
      return {
        textProp: 'noteText',
        textPlaceholder: I18n.t('interaction.noteTextPlaceholder'),
        confirmText: I18n.t('interaction.noteConfirmText'),
        logInteractionMethod: props.addNoteMethod,
        uriID,
        interactionType: 'NOTE',
      };
    case 'LOG_CALL':
      return {
        textProp: 'callText',
        timeProp: 'callTime',
        outcomeProp: 'callOutcome',
        hasTime: true,
        hasOutcome: true,
        textPlaceholder: I18n.t('interaction.callTextPlaceholder'),
        confirmText: I18n.t('interaction.callConfirmText'),
        logInteractionMethod: props.logCallMethod,
        uriID,
        interactionType: 'CALL',
      };
    case 'LOG_EMAIL':
      return {
        textProp: 'emailText',
        timeProp: 'emailTime',
        hasTime: true,
        textPlaceholder: I18n.t('interaction.emailTextPlaceholder'),
        confirmText: I18n.t('interaction.emailConfirmText'),
        logInteractionMethod: props.logEmailMethod,
        uriID,
        interactionType: 'EMAIL',
      };
    case 'LOG_MEETING':
      return {
        textProp: 'meetingText',
        timeProp: 'meetingTime',
        hasTime: true,
        textPlaceholder: I18n.t('interaction.meetingTextPlaceholder'),
        confirmText: I18n.t('interaction.meetingConfirmText'),
        logInteractionMethod: props.logMeetingMethod,
        uriID,
        interactionType: 'MEETING',
      };
    case 'LOG_QUOTE':
      return {
        textProp: 'quoteText',
        timeProp: 'quoteTime',
        hasTime: true,
        hasQuoteNumber: true,
        quoteNumberProp: 'quoteNumber',
        textPlaceholder: I18n.t('interaction.quoteTextPlaceholder'),
        confirmText: I18n.t('interaction.quoteConfirmText'),
        logInteractionMethod: props.logQuoteMethod,
        uriID,
        interactionType: 'QUOTE',
      };
    default:
      return null;
  }
};

const Interaction = props => (
  <InteractionConnect {...getInteractionProps(props)} />
);

export default Interaction;
