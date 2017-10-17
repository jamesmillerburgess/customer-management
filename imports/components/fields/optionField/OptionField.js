import React from 'react';
import Select from 'react-select';

export const noop = () => null;

const OptionField = props => (
  <Select
    value={props.value}
    valueKey={props.valueKey}
    options={props.options}
    onChange={option => {
      if (props.valueKey) {
        props.onChange(option);
      } else {
        props.onChange(option.value);
      }
    }}
    onInputChange={props.onInputChange}
    clearable={false}
    arrowRenderer={noop}
    placeholder={props.placeholder}
    optionRenderer={props.optionRenderer}
    valueRenderer={props.valueRenderer}
    filterOption={props.filterOption}
  />
);

OptionField.defaultProps = {
  placeholder: '',
};

export default OptionField;
