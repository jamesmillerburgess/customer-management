import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';

import AsyncOptionField from '../asyncOptionField/AsyncOptionField';
import Companies from '../../../api/company/companyCollection';

const CompanyField = props => (
  <div className="company-field">
    <AsyncOptionField {...props} searchMethod="company.search" />
    {props.value ? (
      <button
        className="icon fa fa-fw fa-building-o"
        onClick={e => {
          e.preventDefault();
          // An older version stored the company as an object with an _id prop.
          // Later we should be able to update the database and remove this
          // condition.
          props.history.push(`/companies/${props.value._id || props.value}`);
        }}
      />
    ) : null}
  </div>
);

export default withRouter(CompanyField);
