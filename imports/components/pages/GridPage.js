import React from 'react';
import Grid from '../fields/Grid';
import './GridPage.scss';

import SearchInput from '../fields/SearchInput';
import ObjectLink from '../nav/ObjectLink';

const GridPage = ({ sidebarHeader, noDataText, columns, data }) => (
  <div className="section-body">
    <div className="sidebar">
      <ul>
        <li className="sidebar-header">{sidebarHeader}</li>
      </ul>
    </div>
    <div className="content">
      <Grid data={data} columns={columns} noDataText={noDataText} />
    </div>
  </div>
);

export default GridPage;
