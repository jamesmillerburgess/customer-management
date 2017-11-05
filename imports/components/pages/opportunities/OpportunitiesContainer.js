import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Opportunities from '../../../api/opportunity/opportunityCollection';
import Teams from '../../../api/team/teamCollection';
import OpportunitiesDisplay from './OpportunitiesDisplay';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, opportunities: [] };
  }
  const ownerQuery = {};
  switch (props.ownerFilter) {
    case 'ANY':
      break;
    case 'TEAM':
      ownerQuery['users.0'] = {
        $in: (Teams.findOne((Meteor.user().profile || {}).team || {}) || {})
          .members || [Meteor.userId()],
      };
      break;
    case 'SELF':
    default:
      ownerQuery['users.0'] = { $in: [Meteor.userId()] };
      break;
  }
  const opportunities = Opportunities.find(
    {
      ...ownerQuery,
      isArchived: false,
    },
    { sort: { createDate: -1 }, limit: 10 }
  ).fetch();
  return { ...props, opportunities };
};

const OpportunitiesContainer = createContainer(
  linkMeteorData,
  OpportunitiesDisplay
);

export default OpportunitiesContainer;
