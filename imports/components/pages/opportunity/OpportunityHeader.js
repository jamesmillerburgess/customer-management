import React from 'react';
import moment from 'moment';
import { Translate } from 'react-redux-i18n';

const OpportunityHeader = props => (
  <div className="opportunity-header">
    <div className="name">{props.opportunity.name}</div>
    <div className="field-group">
      <div className="field">
        <div className="label">
          <Translate value="opportunities.fields.amount" />
        </div>
        {props.opportunity.amount ? (
          <div className="value">
            {props.opportunity.amount.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}{' '}
            USD
          </div>
        ) : (
          <div className="placeholder">
            <Translate value="opportunities.fields.amountPlaceholder" />
          </div>
        )}
      </div>
      <div className="field">
        <div className="label">
          <Translate value="opportunities.fields.closeDate" />
        </div>
        {props.opportunity.closeDate ? (
          <div className="value">
            {moment(props.opportunity.closeDate).format('D MMM[,] YYYY')}
          </div>
        ) : (
          <div className="placeholder">
            <Translate value="opportunities.fields.closeDatePlaceholder" />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default OpportunityHeader;
