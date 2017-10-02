import React from 'react';
import Select from 'react-select';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';

export const renderStakeholder = stakeholder => (
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

export const filterOption = () => true;
export const noop = () => null;

const CompanyField = props => (
  <div className="company-field">
    <Select.Async
      value={props.value}
      onChange={option =>
        props.onChange({ _id: option._id, name: option.name })}
      valueKey="_id"
      loadOptions={loadOptions}
      optionRenderer={renderStakeholder}
      valueRenderer={renderStakeholder}
      filterOption={filterOption}
      autoload
      clearRenderer={noop}
      arrowRenderer={noop}
      placeholder=""
      clearable={false}
    />
    {props.value ? (
      <button
        className="icon fa fa-fw fa-building-o"
        onClick={e => {
          e.preventDefault();
          props.history.push(`/companies/${props.value._id}`);
        }}
      />
    ) : null}
  </div>
);

export default withRouter(CompanyField);
