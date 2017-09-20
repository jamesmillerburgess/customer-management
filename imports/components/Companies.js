import React from 'react';
import moment from 'moment';

import SectionHeader from './sections/SectionHeader';
import GridPage from './pages/GridPage';

const headerProps = {
  title: 'Companies',
  search: 'Search for a company',
  add: 'Add company',
};

const gridPageProps = {
  sidebarHeader: 'All companies',
  noRows: 'No companies yet!',
  data: [
    {
      name: 'Name',
      createDate: moment('September 20, 2017').format('MMM DD, YYYY'),
      firstContactCreateDate: '-',
    },
    {
      name: 'HubSpot',
      createDate: moment('September 16, 2017').format('MMM DD, YYYY'),
      firstContactCreateDate: moment('September 16, 2017').format(
        'MMM DD, YYYY'
      ),
    },
  ],
};

const Companies = () => (
  <div>
    <SectionHeader {...headerProps} />
    <GridPage {...gridPageProps} />
  </div>
);

export default Companies;
