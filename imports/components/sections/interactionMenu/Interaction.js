import React from 'react';

// Interactions
import NewNote from '../newNote/NewNote';
import LogCall from '../logCall/LogCall';
import LogEmail from '../logEmail/LogEmail';
import LogMeeting from '../logMeeting/LogMeeting';

const Interaction = props => {
  switch (props.activeInteraction) {
    case 'NEW_NOTE':
      return <NewNote {...props} />;
    case 'LOG_CALL':
      return <LogCall {...props} />;
    case 'LOG_EMAIL':
      return <LogEmail {...props} />;
    case 'LOG_MEETING':
      return <LogMeeting {...props} />;
    default:
      return null;
  }
};

export default Interaction;
