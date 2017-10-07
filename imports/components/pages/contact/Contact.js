import React from 'react';
import ObjectEditorConnect from '../ObjectEditorConnect';
import ObjectEditorContainer from '../ObjectEditorContainer';
import GridPageDisplay from '../gridPage/GridPageDisplay';
import Contacts from '../../../api/contact/contactCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const contactProps = () => ({
  collection: Contacts,
  subscription: 'contact.single',
  avatarPath: '/empty-profile-pic.png',
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
  ObjectEditorContainer(GridPageDisplay)
);

const Contact = props => <ContactConnect {...props} {...contactProps()} />;

export default Contact;
