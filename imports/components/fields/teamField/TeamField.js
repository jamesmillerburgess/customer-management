import React from 'react';
import { Meteor } from 'meteor/meteor';

import AsyncOptionField from '../asyncOptionField/AsyncOptionField';

export const optionRenderer = option => (
  <div className="option-value">
    <div className="value">
      <div>{option.name} </div>
      {option.members.length > 0 && (
        <div className="badge">{option.members.length}</div>
      )}
    </div>
  </div>
);

export const valueRenderer = option => (
  <div className="option-value">
    <div className="value">{option.name}</div>
  </div>
);

export const loadOptions = (search, cb) =>
  Meteor.call('team.search', search, (err, options) => {
    if (err) {
      console.log(err);
    }
    cb(null, { options });
  });

const TeamField = props => (
  <AsyncOptionField
    {...props}
    loadOptions={loadOptions}
    optionRenderer={optionRenderer}
    valueRenderer={valueRenderer}
  />
);

export default TeamField;
