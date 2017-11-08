import React from 'react';
import TextField from '../textField/TextField';
import NumberField from '../numberField/NumberField';
import DateField from '../dateField/DateField';
import CompanyField from '../companyField/CompanyField';
import OptionField from '../optionField/OptionField';
import PlaceField from '../placeField/PlaceField';
import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection';

const Field = props => {
  const options = FieldOptions.findOne({ type: props.type });
  if (options) {
    return <OptionField {...props} options={options.options} />;
  }
  const fieldOptions = {
    TEXT: <TextField {...props} />,
    NUMBER: <NumberField {...props} />,
    DATE: <DateField {...props} />,
    COMPANY: <CompanyField {...props} />,
    PLACE: <PlaceField {...props} />,
  };
  return fieldOptions[props.type] || <TextField {...props} />;
};

export default Field;
