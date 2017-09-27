import React from 'react';

const addOpportunityFields = [
  { prop: 'name', label: 'Name' },
  { prop: 'status', label: 'Status' },
  { prop: 'amount', label: 'Amount' },
  { prop: 'closeDate', label: 'Close Date' },
  { prop: 'company', label: 'Company' },
];

const AddOpportunityDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create({ name: props.name, website: props.website });
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
        {addOpportunityFields.map(({ prop, label }) => (
          <div className="input-group" key={prop}>
            <div className="input-label">{label}</div>
            <input
              id={prop}
              value={props[prop]}
              onChange={e => props.setName(e.target.value)}
            />
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

export default AddOpportunityDisplay;
