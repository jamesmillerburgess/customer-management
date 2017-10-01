import React from 'react';
import TextField from '../textField/TextField';
import NumberField from '../numberField/NumberField';
import DateField from '../dateField/DateField';
import CompanyField from '../companyField/CompanyField';
import StatusField from '../statusField/StatusField';

const Field = props => {
  switch (props.fieldType) {
    case 'TEXT':
      return <TextField {...props} />;
    case 'NUMBER':
      return <NumberField {...props} />;
    case 'DATE':
      return <DateField {...props} />;
    case 'COMPANY':
      return <CompanyField {...props} />;
    case 'STATUS':
      return <StatusField {...props} />;
    default:
      return <TextField {...props} />;
  }
};

export default Field;
