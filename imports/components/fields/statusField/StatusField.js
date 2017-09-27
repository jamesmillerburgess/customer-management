import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../ReactSelect.scss';

const APPOINTMENT_SCHEDULED = 'APPOINTMENT_SCHEDULED';
const QUALIFIED_TO_BUY = 'QUALIFIED_TO_BUY';
const PRESENTATION_SCHEDULED = 'PRESENTATION_SCHEDULED';
const DECISION_MAKER_BOUGHT_IN = 'DECISION_MAKER_BOUGHT_IN';
const CONTRACT_SENT = 'CONTRACT_SENT';
const CLOSED_WON = 'CLOSED_WON';
const CLOSED_LOST = 'CLOSED_LOST';

export const STATUS_VALUES = [
  APPOINTMENT_SCHEDULED,
  QUALIFIED_TO_BUY,
  PRESENTATION_SCHEDULED,
  DECISION_MAKER_BOUGHT_IN,
  CONTRACT_SENT,
  CLOSED_WON,
  CLOSED_LOST,
];

export const STATUS_LABELS = {
  [STATUS_VALUES[0]]: 'Appointment Scheduled',
  [STATUS_VALUES[1]]: 'Qualified to Buy',
  [STATUS_VALUES[2]]: 'Presentation Scheduled',
  [STATUS_VALUES[3]]: 'Decision Maker Bought-In',
  [STATUS_VALUES[4]]: 'Contract Sent',
  [STATUS_VALUES[5]]: 'Closed Won',
  [STATUS_VALUES[6]]: 'Closed Lost',
};

const options = [
  { value: 'APPOINTMENT_SCHEDULED', label: 'Appointment Scheduled' },
  { value: 'QUALIFIED_TO_BUY', label: 'Qualified to Buy' },
  { value: 'PRESENTATION_SCHEDULED', label: 'Presentation Scheduled' },
  { value: 'DECISION_MAKER_BOUGHT_IN', label: 'Decision Maker Bought-In' },
  { value: 'CONTRACT_SENT', label: 'Contract Sent' },
  { value: 'CLOSED_WON', label: 'Closed Won' },
  { value: 'CLOSED_LOST', label: 'Closed Lost' },
];

const StatusField = props => (
  <Select
    value={props.value}
    options={options}
    onChange={option => props.onChange(option.value)}
  />
);

export default StatusField;
