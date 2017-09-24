import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Companies from '../../../api/company/companyCollection';
import CompanyDisplay from './CompanyDisplay';

const CompanyContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, company: {}, loading: true };
  }
  const companyId = props.match.params.companyId;
  const loading = !Meteor.subscribe('company.single', companyId).ready();
  const company = Companies.findOne(companyId) || {};
  return { ...props, company, loading };
}, CompanyDisplay);

export default CompanyContainer;
