import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';

import AsyncOptionField from '../asyncOptionField/AsyncOptionField';

export const optionRenderer = stakeholder => (
  <div className="company-value">
    <div className="value">{stakeholder.name}</div>
  </div>
);

export const loadOptions = (search, cb) =>
  Meteor.call('company.search', search, (err, options) => {
    if (err) {
      console.log(err);
    }
    cb(null, { options });
  });

const CompanyField = props => (
  <div className="company-field">
    <AsyncOptionField
      {...props}
      loadOptions={loadOptions}
      optionRenderer={optionRenderer}
      valueRenderer={optionRenderer}
    />
    {props.value ? (
      <button
        className="icon fa fa-fw fa-building-o"
        onClick={e => {
          e.preventDefault();
          props.history.push(`/companies/${props.value}`);
        }}
      />
    ) : null}
  </div>
);

export default withRouter(CompanyField);
