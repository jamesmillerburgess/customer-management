import React from 'react';
import Select from 'react-select';

export const filterOption = () => true;
export const noop = () => null;

const AsyncOptionField = props => (
  <Select.Async
    value={props.value}
    onChange={option => props.onChange(option)}
    valueKey="_id"
    loadOptions={props.loadOptions}
    optionRenderer={props.optionRenderer}
    valueRenderer={props.valueRenderer}
    filterOption={filterOption}
    autoload
    clearRenderer={noop}
    arrowRenderer={noop}
    placeholder=""
    clearable={false}
  />
);

export default AsyncOptionField;
