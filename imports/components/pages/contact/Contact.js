import React from 'react';
import ObjectEditorConnect, {
  generateObjectEditorProps,
} from '../objectEditor/ObjectEditorConnect';
import ObjectEditorContainer from '../objectEditor/ObjectEditorContainer';
import ObjectEditorDisplay from '../objectEditor/ObjectEditorDisplay';
import Contacts from '../../../api/contact/contactCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const contactProps = {
  ...generateObjectEditorProps('contact', 'contacts'),
  collection: Contacts,
  avatarPath: '/empty-profile-pic.png',
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
};

export const properties = () =>
  FieldLists.findOne({ page: 'CONTACT_PROPERTIES' })
    ? FieldLists.findOne({ page: 'CONTACT_PROPERTIES' }).fields
    : [];

const ContactConnect = ObjectEditorConnect(
  ObjectEditorContainer(ObjectEditorDisplay)
);

const Contact = props => (
  <ContactConnect {...props} {...contactProps} properties={properties()} />
);

export default Contact;
