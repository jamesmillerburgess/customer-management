import React from 'react';

import InteractionConnect from './InteractionConnect';

const getInteractionProps = props => {
  const uriID = props.uriID;
  switch (props.activeInteraction) {
    case 'NEW_NOTE':
      return {
        textProp: 'noteText',
        textPlaceholder: 'Start typing to leave a note...',
        confirmText: 'Add note',
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
        textPlaceholder: 'Start typing to describe a call...',
        confirmText: 'Log call',
        logInteractionMethod: props.logCallMethod,
        uriID,
        interactionType: 'CALL',
      };
    case 'LOG_EMAIL':
      return {
        textProp: 'emailText',
        timeProp: 'emailTime',
        hasTime: true,
        textPlaceholder: 'Start typing to describe an email...',
        confirmText: 'Log email',
        logInteractionMethod: props.logEmailMethod,
        uriID,
        interactionType: 'EMAIL',
      };
    case 'LOG_MEETING':
      return {
        textProp: 'meetingText',
        timeProp: 'meetingTime',
        hasTime: true,
        textPlaceholder: 'Start typing to describe a meeting...',
        confirmText: 'Log meeting',
        logInteractionMethod: props.logMeetingMethod,
        uriID,
        interactionType: 'MEETING',
      };
    default:
      return null;
  }
};

const Interaction = props => (
  <InteractionConnect {...getInteractionProps(props)} />
);

export default Interaction;
