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
  switch (props.type) {
    case 'TEXT':
      return <TextField {...props} />;
    case 'NUMBER':
      return <NumberField {...props} />;
    case 'DATE':
      return <DateField {...props} />;
    case 'COMPANY':
      return <CompanyField {...props} />;
    case 'PLACE':
      return <PlaceField {...props} />;
    default:
      return <TextField {...props} />;
  }
};

export default Field;
