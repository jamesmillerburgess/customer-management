import React from 'react';
import ObjectEditorConnect from '../ObjectEditorConnect';
import ObjectEditorContainer from '../ObjectEditorContainer';
import OpportunityDisplay from './OpportunityDisplay';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const opportunityProps = () => ({
  collection: Opportunities,
  subscription: 'opportunity.single',
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
  properties: FieldLists.findOne({ page: 'OPPORTUNITY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'OPPORTUNITY_PROPERTIES' }).fields
    : [],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
});

const OpportunityConnect = ObjectEditorConnect(
  ObjectEditorContainer(OpportunityDisplay)
);

const Opportunity = props => (
  <OpportunityConnect {...props} {...opportunityProps()} />
);

export default Opportunity;
