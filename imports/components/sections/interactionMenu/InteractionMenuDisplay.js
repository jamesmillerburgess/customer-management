import React from 'react';
import Interaction from '../interaction/Interaction';

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
            <span className="button-text">New note</span>
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
            <span className="button-text">Log call</span>
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
            <span className="button-text">Log email</span>
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
            <span className="button-text">Log meeting</span>
          </button>
        );
      case 'LOG_QUOTE':
        return (
          <button
            className={`interaction-item ${activeClass}`}
            key={interaction}
            onClick={() => props.setActiveInteraction(interaction)}
          >
            <div className="fa fa-fw fa-file-text-o icon" />
            <span className="button-text">Log quote</span>
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
