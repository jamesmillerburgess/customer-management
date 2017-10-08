import React from 'react';

const InteractionButtons = props => {
  const call = {};
  if (props.isWriting) {
    call.buttonGroupClass = 'expanded';
    call.buttonGroupHeight = '43px';
    call.buttonGroupOpacity = '1';
    call.buttonCursor = 'auto';
    call.secondaryButtonOnClick = props.cancelCall;
  } else {
    call.buttonGroupClass = 'expandable';
    call.buttonGroupHeight = '0px';
    call.buttonGroupOpacity = '0';
    call.buttonCursor = null;
    call.primaryButtonOnClick = null;
    call.secondaryButtonOnClick = null;
  }
  return (
    <div
      className={`button-group ${call.buttonGroupClass}`}
      style={{
        height: call.buttonGroupHeight,
        opacity: call.buttonGroupOpacity,
      }}
    >
      <button
        className="button-primary"
        style={{ cursor: call.buttonCursor }}
        onClick={props.onConfirm}
      >
        {props.confirmText}
      </button>
      <button
        className="button-secondary"
        style={{ cursor: call.buttonCursor }}
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default InteractionButtons;
