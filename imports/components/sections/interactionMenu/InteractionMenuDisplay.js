import React from 'react';
import { Translate } from 'react-redux-i18n';

import Interaction from '../interaction/Interaction';

const InteractionMenuDisplay = props => {
  const InteractionItem = interaction => {
    const activeClass = interaction === props.activeInteraction && 'active';
    const display = (iconClass, translation) => (
      <button
        className={`interaction-item ${activeClass}`}
        key={interaction}
        onClick={() => props.setActiveInteraction(interaction)}
      >
        <div className={`fa fa-fw ${iconClass} icon`} />
        <span className="button-text">
          <Translate value={`interactionMenu.${translation}`} />
        </span>
      </button>
    );

    switch (interaction) {
      case 'NEW_NOTE':
        return display('fa-pencil', 'newNote');
      case 'LOG_CALL':
        return display('fa-phone', 'logCall');
      case 'LOG_EMAIL':
        return display('fa-envelope', 'logEmail');
      case 'LOG_MEETING':
        return display('fa-handshake-o', 'logMeeting');
      case 'LOG_QUOTE':
        return display('fa-file-text-o', 'logQuote');
      default:
        return null;
    }
  };

  return (
    <div className="panel menu-panel">
      <div className="interaction-menu">
        {props.interactions.map(interaction => InteractionItem(interaction))}
      </div>
      <Interaction {...props} />
    </div>
  );
};

export default InteractionMenuDisplay;
