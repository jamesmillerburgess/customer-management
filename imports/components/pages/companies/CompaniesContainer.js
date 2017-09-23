import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Companies from '../../../api/company/companyCollection';
import CompaniesDisplay from './CompaniesDisplay';

const CompaniesContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, companies: [], loading: true };
  }
  const loading = !Meteor.subscribe('company.user').ready();
  const companies = Companies.find({ users: Meteor.userId() }).fetch();
  return { ...props, companies, loading };
}, CompaniesDisplay);

export default CompaniesContainer;
