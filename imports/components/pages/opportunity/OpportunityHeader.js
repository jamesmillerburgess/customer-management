import React from 'react';
import moment from 'moment';

const OpportunityHeader = props => (
  <div className="opportunity-header">
    <div className="name">{props.opportunity.name}</div>
    <div className="field-group">
      <div className="field">
        <div className="label">Amount</div>
        <div className="value">
          {props.opportunity.amount ? (
            `${props.opportunity.amount.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })} USD`
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="field">
        <div className="label">Close Date</div>
        <div className="value">
          {moment(props.opportunity.closeDate).format('DD MMM[,] YYYY')}
        </div>
      </div>
    </div>
  </div>
);

export default OpportunityHeader;
