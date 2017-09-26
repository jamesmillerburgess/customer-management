import React from 'react';

const InteractionMenu = props => (
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
      className={`button-group ${props.isWritingNote
        ? 'expanded'
        : 'expandable'}`}
      style={{
        height: props.isWritingNote ? '43px' : '0px',
        opacity: props.isWritingNote ? '1' : '0',
      }}
    >
      <button
        className="button-primary"
        style={props.isWritingNote ? {} : { cursor: 'auto' }}
        onClick={props.isWritingNote ? () => props.addNote(props.note) : null}
      >
        Save note
      </button>
      <button
        className="button-secondary"
        style={props.isWritingNote ? {} : { cursor: 'auto' }}
        onClick={props.isWritingNote ? props.cancelNote : null}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default InteractionMenu;
