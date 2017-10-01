import React from 'react';
import OpportunityContainerConnect from './OpportunityContainerConnect';

export const opportunityProps = {
  parentPage: {
    label: 'Opportunities',
    path: '/opportunities',
  },
  statuses: [
    {
      value: 'APPOINTMENT_SCHEDULED',
      label: 'Appointment Scheduled',
      color: '#fb9d95',
    },
    { value: 'QUALIFIED_TO_BUY', label: 'Qualified to Buy', color: '#ef91a4' },
    {
      value: 'PRESENTATION_SCHEDULED',
      label: 'Presentation Scheduled',
      color: '#da89b2',
    },
    {
      value: 'DECISION_MAKER_BOUGHT_IN',
      label: 'Decision Maker Bought-In',
      color: '#da89b2',
    },
    { value: 'CONTRACT_SENT', label: 'Contract Sent', color: '#aa85c0' },
    { value: 'CLOSED_WON', label: 'Closed Won', color: '#9784c2' },
    { value: 'CLOSED_LOST', label: 'Closed Lost', color: '#516f90' },
  ],
  updateStatusMethod: 'opportunity.updateStatus',
  savePropertiesMethod: 'opportunity.saveProperties',
  addInteractionMethod: 'opportunity.addInteraction',
  properties: [
    { name: 'name', label: 'Name', fieldType: 'TEXT', default: '' },
    { name: 'amount', label: 'Amount', fieldType: 'NUMBER', default: '' },
    {
      name: 'closeDate',
      label: 'Close Date',
      fieldType: 'DATE',
      default: '',
    },
    {
      name: 'company',
      label: 'Company',
      fieldType: 'COMPANY',
      default: null,
    },
  ],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
};

const Opportunity = props => (
  <OpportunityContainerConnect {...props} {...opportunityProps} />
);

export default Opportunity;
