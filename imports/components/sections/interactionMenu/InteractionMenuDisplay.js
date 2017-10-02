import React from 'react';

const InteractionMenuDisplay = props => {
  const note = {};
  if (props.isWritingNote) {
    note.buttonGroupClass = 'expanded';
    note.buttonGroupHeight = '43px';
    note.buttonGroupOpacity = '1';
    note.buttonCursor = 'auto';
    note.primaryButtonOnClick = () => props.addNote(props.note);
    note.secondaryButtonOnClick = props.cancelNote;
  } else {
    note.buttonGroupClass = 'expandable';
    note.buttonGroupHeight = '0px';
    note.buttonGroupOpacity = '0';
    note.buttonCursor = null;
    note.primaryButtonOnClick = null;
    note.secondaryButtonOnClick = null;
  }

  return (
    <div className="panel menu-panel">
      <div className="interaction-menu">
        <div className="interaction-item active">
          <div className="fa fa-fw fa-pencil icon" />
          New note
        </div>
      </div>
      <textarea
        id="note"
        value={props.note}
        onChange={e => props.setNote(e.target.value)}
        placeholder="Start typing to leave a note..."
      />
      <div
        className={`button-group ${note.buttonGroupClass}`}
        style={{
          height: note.buttonGroupHeight,
          opacity: note.buttonGroupOpacity,
        }}
      >
        <button
          className="button-primary"
          style={{ cursor: note.buttonCursor }}
          onClick={note.primaryButtonOnClick}
        >
          Save note
        </button>
        <button
          className="button-secondary"
          style={{ cursor: note.buttonCursor }}
          onClick={note.secondaryButtonOnClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InteractionMenuDisplay;
