import React from 'react';
import { Translate } from 'react-redux-i18n';

// Components
import ObjectEditorConnect from '../objectEditor/ObjectEditorConnect';
import ObjectEditorDisplay from '../objectEditor/ObjectEditorDisplay';
import OpportunityDisplay from '../opportunity/OpportunityDisplay';
import ContactHeader from '../../sections/contactHeader/ContactHeader';
import CompanyHeader from '../../sections/companyHeader/CompanyHeader';

// Collections
import Contacts from '../../../api/contact/contactCollection';
import Companies from '../../../api/company/companyCollection';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const generateObjectEditorProps = (singular, plural) => ({
  subscription: `${singular}.single`,
  parentPage: {
    label: <Translate value={`nav.${plural}`} />,
    path: `/${plural}`,
  },
  savePropertiesMethod: `${singular}.saveProperties`,
  addNoteMethod: `${singular}.addNote`,
  logCallMethod: `${singular}.logCall`,
  logEmailMethod: `${singular}.logEmail`,
  logMeetingMethod: `${singular}.logMeeting`,
  logQuoteMethod: `${singular}.logQuote`,
});

export const contactProps = () => ({
  ...generateObjectEditorProps('contact', 'contacts'),
  collection: Contacts,
  SidebarHeader: ContactHeader,
  avatarURL: 'empty-profile-pic_wqnyvm.png',
  interactions: [
    'NEW_NOTE',
    'LOG_CALL',
    'LOG_EMAIL',
    'LOG_MEETING',
    'LOG_QUOTE',
  ],
  propertiesPage: 'CONTACT_PROPERTIES',
});

export const companyProps = () => ({
  ...generateObjectEditorProps('company', 'companies'),
  collection: Companies,
  SidebarHeader: CompanyHeader,
  avatarURL: 'empty-company-pic_uokzyz',
  interactions: [
    'NEW_NOTE',
    'LOG_CALL',
    'LOG_EMAIL',
    'LOG_MEETING',
    'LOG_QUOTE',
  ],
  propertiesPage: 'COMPANY_PROPERTIES',
});

export const opportunityProps = () => ({
  collection: Opportunities,
  subscription: 'opportunity.single',
  parentPage: {
    label: <Translate value="nav.opportunities" />,
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
  addNoteMethod: 'opportunity.addNote',
  logCallMethod: 'opportunity.logCall',
  logEmailMethod: 'opportunity.logEmail',
  logMeetingMethod: 'opportunity.logMeeting',
  logQuoteMethod: 'opportunity.logQuote',
  interactions: [
    'NEW_NOTE',
    'LOG_CALL',
    'LOG_EMAIL',
    'LOG_MEETING',
    'LOG_QUOTE',
  ],
  propertiesPage: 'OPPORTUNITY_PROPERTIES',
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
