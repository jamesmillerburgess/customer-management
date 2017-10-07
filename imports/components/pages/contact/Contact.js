import React from 'react';
import ObjectEditorConnect from '../ObjectEditorConnect';
import ObjectEditorContainer from '../ObjectEditorContainer';
import ContactDisplay from './ContactDisplay';
import Contacts from '../../../api/contact/contactCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const contactProps = () => ({
  collection: Contacts,
  subscription: 'contact.single',
  parentPage: {
    label: 'Contacts',
    path: '/contacts',
  },
  savePropertiesMethod: 'contact.saveProperties',
  addInteractionMethod: 'contact.addInteraction',
  properties: FieldLists.findOne({ page: 'CONTACT_PROPERTIES' })
    ? FieldLists.findOne({ page: 'CONTACT_PROPERTIES' }).fields
    : [],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
});

const ContactConnect = ObjectEditorConnect(
  ObjectEditorContainer(ContactDisplay)
);

const Contact = props => <ContactConnect {...props} {...contactProps()} />;

export default Contact;
