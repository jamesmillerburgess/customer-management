import React from 'react';
import DateTime from 'react-datetime';
import { I18n } from 'react-redux-i18n';

const DateFieldDisplay = props => (
  <DateTime
    className="date-field"
    timeFormat={props.timeFormat}
    dateFormat={I18n.t('dateFieldFormat')}
    locale={props.locale}
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

DateFieldDisplay.defaultProps = { timeFormat: false };

export default DateFieldDisplay;
