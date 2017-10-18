import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Opportunities from '../../../api/opportunity/opportunityCollection';
import OpportunitiesDisplay from './OpportunitiesDisplay';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, opportunities: [] };
  }
  const opportunities = Opportunities.find({
    users: Meteor.userId(),
    isArchived: false,
  }).fetch();
  return { ...props, opportunities };
};

const OpportunitiesContainer = createContainer(
  linkMeteorData,
  OpportunitiesDisplay
);

export default OpportunitiesContainer;
