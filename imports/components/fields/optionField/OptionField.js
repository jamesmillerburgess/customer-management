import React from 'react';
import Select from 'react-select';
import { Translate } from 'react-redux-i18n';

export const noop = () => null;

const OptionField = props => {
  let valueRenderer = props.valueRenderer;
  let optionRenderer = props.optionRenderer;
  if (!valueRenderer) {
    valueRenderer = option => (
      <Translate value={option[props.labelKey || 'label']} />
    );
  }
  if (!optionRenderer) {
    optionRenderer = option => (
      <Translate value={option[props.labelKey || 'label']} />
    );
  }
  return (
    <Select
      value={props.value}
      valueKey={props.valueKey}
      labelKey={props.labelKey}
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
      optionRenderer={optionRenderer}
      valueRenderer={valueRenderer}
      filterOption={props.filterOption}
      onOpen={props.onOpen}
      autoBlur
    />
  );
};

OptionField.defaultProps = {
  placeholder: '',
};

export default OptionField;
