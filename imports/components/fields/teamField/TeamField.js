import React from 'react';
import { Meteor } from 'meteor/meteor';

import AsyncOptionField from '../asyncOptionField/AsyncOptionField';

// export const loadOptions = (search, cb) =>
//   Meteor.call('team.search', search, (err, options) => {
//     if (err) {
//       console.log(err);
//     }
//     cb(null, {
//       options: [{ _id: '', name: 'No team assigned' }, ...options],
//     });
//   });

const TeamField = props => (
  <AsyncOptionField
    {...props}
    searchMethod="team.search"
    clearOption="No team assigned"
  />
);

export default TeamField;
