import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { OPPORTUNITY_FIELDS } from './OpportunityConstants';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import OpportunityDisplay from './OpportunityDisplay';

const OpportunityContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, company: { timeline: [] }, loading: true };
  }
  const opportunityId = props.match.params.opportunityId;
  const loading = !Meteor.subscribe(
    'opportunity.single',
    opportunityId
  ).ready();
  const opportunity = Opportunities.findOne(opportunityId) || {
    name: '',
    timeline: [],
  };
  if (
    opportunity._id &&
    (!props.hasLoaded || opportunity._id !== props.loadedValues._id)
  ) {
    props.setHasLoaded(true);
    props.properties.forEach(properties =>
      props.setProperty(properties.name, opportunity[properties.name])
    );
    props.setLoadedValues(opportunity);
  }
  return { ...props, opportunity, loading };
}, OpportunityDisplay);

export default OpportunityContainer;
