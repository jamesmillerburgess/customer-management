import React from 'react';

const AddObjectDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create(
        props.fields.reduce((prev, { prop }) => {
          return {
            ...prev,
            [prop]: props[prop],
          };
        }, {})
      );
    }}
  >
    <header className="overlay-header">
      Add {props.label}
      <button
        type="button"
        className="button-dismiss-overlay"
        onClick={props.closeOverlay}
      >
        X
      </button>
    </header>
    <div className="overlay-body">
      <div className="overlay-content">
        {props.fields.map(({ prop, label, component }) => (
          <div className="input-group" key={prop}>
            <div className="input-label">{label}</div>
            {component({
              value: props[prop],
              onChange: val => props.setProp(prop, val),
            })}
          </div>
        ))}
      </div>
    </div>
    <footer className="overlay-footer">
      <button className="button-primary" type="submit">
        Create {props.label}
      </button>
      <button
        type="button"
        className="button-secondary"
        onClick={props.closeOverlay}
      >
        Cancel
      </button>
    </footer>
  </form>
);

export default AddObjectDisplay;
