import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import Companies from './companyCollection';

const CREATION = 'CREATION';

const createCompany = (company, userId) => {
  return Companies.insert({
    ...company,
    users: [userId],
    isArchived: false,
    timeline: [
      {
        id: new Mongo.ObjectID()._str,
        type: 'CREATION',
        timestamp: new Date(),
      },
    ],
  });
};

Meteor.methods({
  'company.create': createCompany,
});
