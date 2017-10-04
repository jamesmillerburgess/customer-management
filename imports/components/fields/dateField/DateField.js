import React from 'react';
import DateTime from 'react-datetime';

const DateField = props => (
  <DateTime
    className="date-field"
    timeFormat={false}
    dateFormat={'DD MMM[,] YYYY'}
    closeOnSelect
    value={props.value}
    onChange={value => props.onChange(value.toDate())}
  />
);

export default DateField;
