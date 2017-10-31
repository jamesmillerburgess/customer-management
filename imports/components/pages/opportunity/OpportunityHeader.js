import React from 'react';
import moment from 'moment';
import { Translate, Localize } from 'react-redux-i18n';

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
            <Localize value={props.opportunity.amount} /> USD
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
            <Localize
              value={props.opportunity.closeDate}
              dateFormat="dateFieldFormat"
            />
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
