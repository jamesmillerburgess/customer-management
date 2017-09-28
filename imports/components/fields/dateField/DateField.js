import React from 'react';
import DateTime from 'react-datetime';
import './DateField.scss';

const DateField = props => (
  <DateTime
    className="date-field"
    timeFormat={false}
    dateFormat={'DD MMM[,] YYYY'}
    closeOnSelect
  />
);

export default DateField;
