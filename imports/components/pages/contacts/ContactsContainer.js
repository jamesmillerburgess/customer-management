import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Contacts from '../../../api/contact/contactCollection';
import ContactsDisplay from './ContactsDisplay';

export const sortContacts = (a, b) => b.createDate - a.createDate;

const ContactsContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, contacts: [], loading: true };
  }
  const loading = !Meteor.subscribe('contact.user').ready();
  const contacts = Contacts.find({
    users: Meteor.userId(),
    isArchived: false,
  })
    .fetch()
    .sort(sortContacts);
  return { ...props, contacts, loading };
}, ContactsDisplay);

export default ContactsContainer;
