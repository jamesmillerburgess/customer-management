import React from 'react';
import { Translate } from 'react-redux-i18n';

import Field from '../../fields/field/Field';

const AddContactDisplay = props => (
  <div className="overlay-content">
    {props.fields.map(field => (
      <div className="input-group" key={field.name}>
        <div className="input-label">
          <Translate value={field.label} />
        </div>
        <Field {...field} onChange={val => props.setProp(field.name, val)} />
      </div>
    ))}
  </div>
);

export default AddContactDisplay;
