import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { COMPANY_FIELDS } from './CompanyConstants';
import Companies from '../../../api/company/companyCollection';
import CompanyDisplay from './CompanyDisplay';

const CompanyContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, company: { timeline: [] }, loading: true };
  }
  const companyId = props.match.params.companyId;
  const loading = !Meteor.subscribe('company.single', companyId).ready();
  const company = Companies.findOne(companyId) || {
    name: '',
    timeline: [],
  };
  if (
    company._id &&
    (!props.hasLoaded || company._id !== props.loadedValues._id)
  ) {
    props.setHasLoaded(true);
    props.properties.forEach(properties =>
      props.setProperty(properties.name, company[properties.name])
    );
    props.setLoadedValues(company);
  }
  return { ...props, company, loading };
}, CompanyDisplay);

export default CompanyContainer;
