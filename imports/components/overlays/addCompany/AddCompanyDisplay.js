import React from 'react';

const AddCompanyDisplay = props => (
  <div className="overlay-right">
    <div className="overlay-header">
      Add a company
      <button className="button-dismiss-overlay" onClick={props.closeOverlay}>
        X
      </button>
    </div>
    <div className="overlay-body">
      <div className="input-group">
        <div className="input-label">Name</div>
        <input />
      </div>
      <div className="input-group">
        <div className="input-label">Website</div>
        <input />
      </div>
    </div>
    <div className="overlay-footer">
      <button className="button-primary">Create company</button>
      <button className="button-primary">Create and add another</button>
      <button className="button-secondary">Cancel</button>
    </div>
  </div>
);

export default AddCompanyDisplay;
