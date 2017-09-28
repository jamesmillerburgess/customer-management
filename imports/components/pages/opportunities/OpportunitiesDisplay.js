import React from 'react';
import './OpportunitiesDisplay.scss';
import PageHeader from '../PageHeader';
import OpportunityBoardConnect from './OpportunityBoardConnect';

const headerProps = {
  title: 'Opportunities',
  search: 'Search for an opportunity',
  add: 'Add opportunity',
};

const OpportunitiesDisplay = props => (
  <div>
    <PageHeader
      {...headerProps}
      onClickAdd={() => props.setIsOverlayOpen(true)}
    />
    <OpportunityBoardConnect cards={props.opportunities} />
  </div>
);

export default OpportunitiesDisplay;
