import React from 'react';
import { Translate } from 'react-redux-i18n';

import './OpportunitiesDisplay.scss';
import PageHeader from '../PageHeader';
import OpportunityBoardConnect from './OpportunityBoardConnect';

const headerProps = {
  title: <Translate value="opportunities.title" />,
  searchPlaceholder: 'Search for an opportunity',
  addButtonText: <Translate value="opportunities.addButtonText" />,
};

const OpportunitiesDisplay = props => (
  <div>
    <PageHeader {...headerProps} onClickAdd={props.openOverlay} />
    <OpportunityBoardConnect cards={props.opportunities} />
  </div>
);

export default OpportunitiesDisplay;
