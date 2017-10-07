import React from 'react';
import Select from 'react-select';

export const noop = () => null;

const OptionField = props => (
  <Select
    value={props.value}
    options={props.options}
    onChange={option => props.onChange(option.value)}
    clearable={false}
    arrowRenderer={noop}
    placeholder=""
  />
);

export default OptionField;
