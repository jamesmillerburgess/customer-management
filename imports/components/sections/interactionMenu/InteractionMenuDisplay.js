import React from 'react';
import Interaction from './Interaction';

const InteractionMenuDisplay = props => {
  const InteractionItem = interaction => {
    const activeClass = interaction === props.activeInteraction && 'active';
    switch (interaction) {
      case 'NEW_NOTE':
        return (
          <button
            className={`interaction-item ${activeClass}`}
            key={interaction}
            onClick={() => props.setActiveInteraction(interaction)}
          >
            <div className="fa fa-fw fa-pencil icon" />
            New note
          </button>
        );
      case 'LOG_CALL':
        return (
          <button
            className={`interaction-item ${activeClass}`}
            key={interaction}
            onClick={() => props.setActiveInteraction(interaction)}
          >
            <div className="fa fa-fw fa-phone icon" />
            Log call
          </button>
        );
      case 'LOG_EMAIL':
        return (
          <button
            className={`interaction-item ${activeClass}`}
            key={interaction}
            onClick={() => props.setActiveInteraction(interaction)}
          >
            <div className="fa fa-fw fa-envelope icon" />
            Log email
          </button>
        );
      case 'LOG_MEETING':
        return (
          <button
            className={`interaction-item ${activeClass}`}
            key={interaction}
            onClick={() => props.setActiveInteraction(interaction)}
          >
            <div className="fa fa-fw fa-handshake-o icon" />
            Log meeting
          </button>
        );
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
