import React from 'react';
import './OpportunitiesDisplay.scss';
import PageHeader from '../PageHeader';
import OpportunityBoardConnect from './OpportunityBoardConnect';

const headerProps = {
  title: 'Opportunities',
  searchPlaceholder: 'Search for an opportunity',
  addButtonText: 'Add opportunity',
};

const OpportunitiesDisplay = props => (
  <div>
    <PageHeader {...headerProps} onClickAdd={props.openOverlay} />
    <OpportunityBoardConnect cards={props.opportunities} />
  </div>
);

export default OpportunitiesDisplay;
