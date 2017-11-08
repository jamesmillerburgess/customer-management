import React from 'react';
import { Translate } from 'react-redux-i18n';

import FieldList from '../../sections/fieldList/FieldList';

const AddContactDisplay = props => (
  <div className="overlay-content">
    <FieldList fields={props.fields} setProp={props.setProp} />
  </div>
);

export default AddContactDisplay;
