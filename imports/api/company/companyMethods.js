import { Meteor } from 'meteor/meteor';

import Companies from './companyCollection';

const createCompany = (company, userId) => {
  return Companies.insert({ ...company, users: [userId], isArchived: false });
};

Meteor.methods({
  'company.create': createCompany,
});
