import React from 'react';
import { Translate } from 'react-redux-i18n';

import Field from '../fields/field/Field';

const AddObjectDisplay = props => (
  <form
    className={`overlay-right ${props.show ? 'show' : ''}`}
    onSubmit={e => {
      e.preventDefault();
      props.create(
        props.fields.reduce(
          (prev, { name, value }) => {
            return {
              ...prev,
              [name]: value,
            };
          },
          { place: props.place, ...props.parsedPlace }
        )
      );
    }}
  >
    <header className="overlay-header">
      {props.title}
      <button
        type="button"
        className="button-dismiss-overlay"
        onClick={props.closeOverlay}
      >
        X
      </button>
    </header>
    <div className="overlay-body">
      {props.open &&
        props.OverlayContent && <props.OverlayContent {...props} />}
    </div>
    <footer className="overlay-footer">
      <button className="button-primary" type="submit">
        {props.confirmLabel}
      </button>
      <button
        type="button"
        className="button-secondary"
        onClick={props.closeOverlay}
      >
        {props.cancelButtonText}
      </button>
      <div className={`error-message ${props.errorMessageClass}`}>
        {props.errorMessage}
      </div>
    </footer>
  </form>
);

export default AddObjectDisplay;
