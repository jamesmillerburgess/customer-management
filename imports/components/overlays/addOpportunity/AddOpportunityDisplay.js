import React from 'react';

import { addOpportunityFields } from './AddOpportunityConstants';

const AddOpportunityDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create(
        addOpportunityFields.reduce((prev, { prop }) => {
          return {
            ...prev,
            [prop]: props[prop],
          };
        }, {})
      );
    }}
  >
    <header className="overlay-header">
      Add an opportunity
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
        {addOpportunityFields.map(({ prop, label, component }) => (
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
        Create opportunity
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

export default AddOpportunityDisplay;
