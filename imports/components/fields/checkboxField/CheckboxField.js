import React from 'react';

const CheckboxField = props => (
  <button
    className={`checkbox ${props.value && 'active'}`}
    onClick={() => props.onChange(!props.value)}
  >
    <span className={`fa fa-fw ${props.value && 'fa-check'}`} />
  </button>
);

export default CheckboxField;
