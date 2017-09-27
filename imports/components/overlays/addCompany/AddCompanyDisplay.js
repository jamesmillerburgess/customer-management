import React from 'react';

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
        <div className="input-group">
          <div className="input-label">Name</div>
          <input
            id="name"
            value={props.name}
            onChange={e => props.setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">Website</div>
          <input
            id="website"
            value={props.website}
            onChange={e => props.setWebsite(e.target.value)}
          />
        </div>
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
