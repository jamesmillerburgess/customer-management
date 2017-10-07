import React from 'react';

// Components
import ObjectEditorConnect from '../objectEditor/ObjectEditorConnect';
import ObjectEditorDisplay from '../objectEditor/ObjectEditorDisplay';
import OpportunityDisplay from '../opportunity/OpportunityDisplay';

// Collections
import Contacts from '../../../api/contact/contactCollection';
import Companies from '../../../api/company/companyCollection';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const generateObjectEditorProps = (singular, plural) => ({
  subscription: `${singular}.single`,
  parentPage: {
    label: plural[0].toUpperCase() + plural.slice(1),
    path: `/${plural}`,
  },
  savePropertiesMethod: `${singular}.saveProperties`,
  addInteractionMethod: `${singular}.addInteraction`,
});

export const contactProps = () => ({
  ...generateObjectEditorProps('contact', 'contacts'),
  collection: Contacts,
  avatarPath: '/empty-profile-pic.png',
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
  properties: FieldLists.findOne({ page: 'CONTACT_PROPERTIES' })
    ? FieldLists.findOne({ page: 'CONTACT_PROPERTIES' }).fields
    : [],
});

export const companyProps = () => ({
  ...generateObjectEditorProps('company', 'companies'),
  collection: Companies,
  avatarPath: '/empty-company-pic.png',
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
  properties: FieldLists.findOne({ page: 'COMPANY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'COMPANY_PROPERTIES' }).fields
    : [],
});

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
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
  properties: FieldLists.findOne({ page: 'OPPORTUNITY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'OPPORTUNITY_PROPERTIES' }).fields
    : [],
});

const ObjectConnect = ObjectEditorConnect(ObjectEditorDisplay);
const OpportunityConnect = ObjectEditorConnect(OpportunityDisplay);

export const Contact = props => (
  <ObjectConnect {...props} {...contactProps()} />
);
export const Company = props => (
  <ObjectConnect {...props} {...companyProps()} />
);
export const Opportunity = props => (
  <OpportunityConnect {...props} {...opportunityProps()} />
);
