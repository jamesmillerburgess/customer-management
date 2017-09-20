import React from 'react';

import SectionHeader from './sections/SectionHeader';
import GridPage from './pages/GridPage';

const headerProps = {
  title: 'Contacts',
  search: 'Search for a contact',
  add: 'Add contact',
};

const gridPageProps = {
  sidebarHeader: 'All contacts',
  noRows: 'No contacts yet!',
};

const Contacts = () => (
  <div>
    <SectionHeader {...headerProps} />
    <GridPage {...gridPageProps} />
  </div>
);

export default Contacts;
