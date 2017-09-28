import React from 'react';
import Select from 'react-select';
import { Meteor } from 'meteor/meteor';

export const renderStakeholder = stakeholder => <div>{stakeholder.name}</div>;

export const loadOptions = (search, cb) =>
  Meteor.call('company.search', search, (err, options) => {
    cb(null, { options });
  });

const CompanyField = props => (
  <Select.Async
    value={props.value}
    onChange={option => props.onChange({ _id: option._id, name: option.name })}
    valueKey="_id"
    loadOptions={loadOptions}
    optionRenderer={renderStakeholder}
    valueRenderer={renderStakeholder}
    filterOption={() => true}
    autoload
    clearRenderer={() => null}
    arrowRenderer={() => null}
    placeholder=""
  />
);

export default CompanyField;
