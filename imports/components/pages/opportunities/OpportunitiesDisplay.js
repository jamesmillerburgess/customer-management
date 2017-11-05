import React from 'react';
import { Translate } from 'react-redux-i18n';

import './OpportunitiesDisplay.scss';
import PageHeader from '../PageHeader';
import OpportunityBoardConnect from './OpportunityBoardConnect';
import ListPageSidebar from '../../sections/listPageSidebar/ListPageSidebar';

const headerProps = {
  title: <Translate value="opportunities.title" />,
  searchPlaceholder: 'Search for an opportunity',
  addButtonText: <Translate value="opportunities.addButtonText" />,
};

const OpportunitiesDisplay = props => (
  <div className="opportunities">
    <PageHeader {...headerProps} onClickAdd={props.openOverlay} />
    <div className="section-body">
      <div className="sidebar">
        <ListPageSidebar tableId="opportunity" />
      </div>
      <div className="content">
        <OpportunityBoardConnect cards={props.opportunities} />
      </div>
    </div>
  </div>
);

export default OpportunitiesDisplay;
