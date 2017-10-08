import React from 'react';

// Interactions
import NewNote from '../newNote/NewNote';
import LogCall from '../logCall/LogCall';

const Interaction = props => {
  switch (props.activeInteraction) {
    case 'NEW_NOTE':
      return <NewNote {...props} />;
    case 'LOG_CALL':
      return <LogCall {...props} />;
    default:
      return null;
  }
};

export default Interaction;
