import React from 'react';

import ListPageConnect, {
  generateListPageProps,
} from '../listPage/ListPageConnect';
import Contacts from '../../../api/contact/contactCollection';

export const contactListProps = generateListPageProps(
  'contact',
  'contacts',
  Contacts
);

const ContactList = props => (
  <ListPageConnect {...props} {...contactListProps} />
);

export default ContactList;
