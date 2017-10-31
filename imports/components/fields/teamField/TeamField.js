import React from 'react';
import { Meteor } from 'meteor/meteor';

import AsyncOptionField from '../asyncOptionField/AsyncOptionField';

const TeamField = props => (
  <AsyncOptionField
    {...props}
    searchMethod="team.search"
    clearOption="No team assigned"
    labelKey="name"
  />
);

export default TeamField;
