import React from 'react';
import { Translate } from 'react-redux-i18n';

const InteractionButtons = props => {
  const btn = {};
  if (props.isWriting) {
    btn.buttonGroupClass = 'expanded';
    btn.buttonGroupHeight = '43px';
    btn.buttonGroupOpacity = '1';
    btn.buttonCursor = null;
    btn.primaryButtonOnClick = props.onConfirm;
    btn.secondaryButtonOnClick = props.onCancel;
  } else {
    btn.buttonGroupClass = 'expandable';
    btn.buttonGroupHeight = '0px';
    btn.buttonGroupOpacity = '0';
    btn.buttonCursor = 'auto';
    btn.primaryButtonOnClick = null;
    btn.secondaryButtonOnClick = null;
  }
  return (
    <div
      className={`button-group ${btn.buttonGroupClass}`}
      style={{
        height: btn.buttonGroupHeight,
        opacity: btn.buttonGroupOpacity,
      }}
    >
      <button
        className="button-primary"
        style={{ cursor: btn.buttonCursor }}
        onClick={btn.primaryButtonOnClick}
      >
        {props.confirmText}
      </button>
      <button
        className="button-secondary"
        style={{ cursor: btn.buttonCursor }}
        onClick={btn.secondaryButtonOnClick}
      >
        <Translate value="interaction.cancelButtonText" />
      </button>
    </div>
  );
};

export default InteractionButtons;
