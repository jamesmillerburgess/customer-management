import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import ListPageConnect from '../listPage/ListPageConnect';
import Contacts from '../../../api/contact/contactCollection';

export const contactListProps = {
  subscription: 'contact.user',
  collection: Contacts,
  title: 'Contacts',
  searchPlaceholder: 'Search for a contact',
  addButtonText: 'Add contact',
  gridPageProps: contacts => ({
    sidebarHeader: 'All contacts',
    noRows: 'No contacts yet!',
    columns: [
      {
        width: 45,
        resizable: false,
        sortable: false,
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: 'name',
        Cell: props => (
          <Link to={`/contacts/${contacts[props.index]._id}`}>
            {props.value}
          </Link>
        ),
      },
      {
        Header: 'Create Date',
        id: 'lastName',
        accessor: 'createDate',
        Cell: props => (
          <span>{moment(props.value).format('MMM DD[,] YYYY')}</span>
        ),
      },
    ],
  }),
};

const ContactList = props => (
  <ListPageConnect {...props} {...contactListProps} />
);

export default ContactList;
