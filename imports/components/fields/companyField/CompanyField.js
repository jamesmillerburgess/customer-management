import React from 'react';
import Select from 'react-select';
import { Meteor } from 'meteor/meteor';

export const renderStakeholder = stakeholder => <div>{stakeholder.name}</div>;

const CompanyField = props => {
  const loadOptions = (search, cb) =>
    Meteor.call('company.search', search, (err, options) => {
      cb(null, { options });
    });

  return (
    <Select.Async
      value={props.value}
      onChange={option => props.onChange({ id: option._id, name: option.name })}
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
};

export default CompanyField;
