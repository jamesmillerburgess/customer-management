import React from 'react';
import ObjectEditorConnect from '../ObjectEditorConnect';
import ObjectEditorContainer from '../ObjectEditorContainer';
import ContactDisplay from './ContactDisplay';
import Contacts from '../../../api/contact/contactCollection';

export const contactProps = {
  collection: Contacts,
  subscription: 'contact.single',
  parentPage: {
    label: 'Contacts',
    path: '/contacts',
  },
  savePropertiesMethod: 'contact.saveProperties',
  addInteractionMethod: 'contact.addInteraction',
  properties: [
    { name: 'name', label: 'Name', fieldType: 'TEXT', default: '' },
    { name: 'email', label: 'Email', fieldType: 'TEXT', default: '' },
    {
      name: 'company',
      label: 'Company',
      fieldType: 'COMPANY',
      default: null,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      fieldType: 'TEXT',
      default: '',
    },
    {
      name: 'lifecycleStage',
      label: 'Lifecycle Stage',
      fieldType: 'TEXT',
      default: '',
    },
    {
      name: 'leadStatus',
      label: 'Lead Status',
      type: 'TEXT',
      default: '',
    },
  ],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
};

const ContactConnect = ObjectEditorConnect(
  ObjectEditorContainer(ContactDisplay)
);

const Contact = props => <ContactConnect {...props} {...contactProps} />;

export default Contact;
