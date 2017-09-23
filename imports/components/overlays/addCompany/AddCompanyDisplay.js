import React from 'react';

const AddCompanyDisplay = props => (
  <div className="overlay-right">
    <header className="overlay-header">
      Add a company
      <button className="button-dismiss-overlay" onClick={props.closeOverlay}>
        X
      </button>
    </header>
    <div className="overlay-body">
      <div className="overlay-content">
        <div className="input-group">
          <div className="input-label">Name</div>
          <input />
        </div>
        <div className="input-group">
          <div className="input-label">Website</div>
          <input />
        </div>
      </div>
    </div>
    <footer className="overlay-footer">
      <button className="button-primary">Create company</button>
      <button className="button-primary">Create and add another</button>
      <button className="button-secondary" onClick={props.closeOverlay}>
        Cancel
      </button>
    </footer>
  </div>
);

export default AddCompanyDisplay;
