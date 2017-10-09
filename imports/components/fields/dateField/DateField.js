import React from 'react';
import DateTime from 'react-datetime';

const DateField = props => (
  <DateTime
    className="date-field"
    timeFormat={props.timeFormat}
    dateFormat={'DD MMM YYYY'}
    closeOnSelect
    value={props.value}
    onChange={value => {
      if (typeof value.toDate !== 'function') {
        return;
      }
      props.onChange(value.toDate());
    }}
  />
);

DateField.defaultProps = { timeFormat: false };

export default DateField;
