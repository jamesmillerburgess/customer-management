import React from 'react';

import { addCompanyFields } from './AddCompanyConstants';

const AddCompanyDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create({ name: props.name, website: props.website });
    }}
  >
    <header className="overlay-header">
      Add a company
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
        {addCompanyFields.map(({ prop, label, component }) => (
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
        Create company
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

export default AddCompanyDisplay;
