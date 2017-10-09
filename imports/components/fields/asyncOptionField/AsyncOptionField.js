import React from 'react';
import Select from 'react-select';

export const filterOption = () => true;
export const noop = () => null;

const AsyncOptionField = props => (
  <Select.Async
    value={props.value}
    onChange={option => props.onChange({ _id: option._id, name: option.name })}
    valueKey="_id"
    loadOptions={props.loadOptions}
    optionRenderer={props.optionRenderer}
    valueRenderer={props.optionRenderer}
    filterOption={filterOption}
    autoload
    clearRenderer={noop}
    arrowRenderer={noop}
    placeholder=""
    clearable={false}
  />
);

export default AsyncOptionField;
