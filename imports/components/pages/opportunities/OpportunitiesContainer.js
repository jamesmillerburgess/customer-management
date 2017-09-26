import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Opportunities from '../../../api/opportunity/opportunityCollection';
import OpportunitiesDisplay from './OpportunitiesDisplay';

const OpportunitiesContainer = createContainer(props => {
  if (!Meteor.userId()) {
    return { ...props, opportunities: [], loading: true };
  }
  const loading = !Meteor.subscribe('opportunities.user').ready();
  const opportunities = Opportunities.find({
    users: Meteor.userId(),
    isArchived: false,
  }).fetch();
  return { ...props, opportunities, loading };
}, OpportunitiesDisplay);

export default OpportunitiesContainer;
