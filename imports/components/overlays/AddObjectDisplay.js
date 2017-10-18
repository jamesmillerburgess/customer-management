import React from 'react';
import Field from '../fields/field/Field';

const AddObjectDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create(
        props.fields.reduce((prev, { name, value }) => {
          return {
            ...prev,
            [name]: value,
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
        {props.fields.map(field => (
          <div className="input-group" key={field.name}>
            <div className="input-label">{field.label}</div>
            <Field
              {...field}
              onChange={val => props.setProp(field.name, val)}
            />
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
      <div className={`error-message ${props.errorMessageClass}`}>
        {props.errorMessage}
      </div>
    </footer>
  </form>
);

export default AddObjectDisplay;
