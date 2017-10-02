import React from 'react';
import moment from 'moment';

const OpportunityHeader = props => (
  <div className="opportunity-header">
    <div className="name">{props.opportunity.name}</div>
    <div className="field-group">
      <div className="field">
        <div className="label">Amount</div>
        {props.opportunity.amount ? (
          <div className="value">
            {props.opportunity.amount.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}{' '}
            USD
          </div>
        ) : (
          <div className="placeholder">Opportunity Amount</div>
        )}
      </div>
      <div className="field">
        <div className="label">Close Date</div>
        {props.opportunity.closeDate ? (
          <div className="value">
            {moment(props.opportunity.closeDate).format('DD MMM[,] YYYY')}
          </div>
        ) : (
          <div className="placeholder">Opportunity Close Date</div>
        )}
      </div>
    </div>
  </div>
);

export default OpportunityHeader;
