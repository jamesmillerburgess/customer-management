import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Opportunities from '../../../api/opportunity/opportunityCollection';
import Teams from '../../../api/team/teamCollection';
import OpportunitiesDisplay from './OpportunitiesDisplay';

export const getOwnerQuery = ownerFilter => {
  switch (ownerFilter) {
    case 'ANY':
      return {};
    case 'TEAM':
      return {
        'users.0': {
          $in: (Teams.findOne(
            ((Meteor.user() || {}).profile || {}).team || ''
          ) || {}
          ).members || [Meteor.userId()],
        },
      };
    case 'SELF':
    default:
      return { 'users.0': { $in: [Meteor.userId()] } };
  }
};

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, opportunities: [] };
  }
  const ownerQuery = getOwnerQuery(props.ownerFilter);
  const opportunities = Opportunities.find({
    ...ownerQuery,
    isArchived: false,
  }).fetch();
  return { ...props, opportunities };
};

const OpportunitiesContainer = createContainer(
  linkMeteorData,
  OpportunitiesDisplay
);

export default OpportunitiesContainer;
