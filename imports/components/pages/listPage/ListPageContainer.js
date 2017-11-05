import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ListPageDisplay from './ListPageDisplay';

import Teams from '../../../api/team/teamCollection';

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
    return { ...props, data: [] };
  }
  const ownerQuery = getOwnerQuery(props.ownerFilter);
  const data = props.collection
    .find(
      {
        ...ownerQuery,
        isArchived: false,
      },
      { sort: { createDate: -1 } }
    )
    .fetch();
  return { ...props, data };
};

const ListPageContainer = createContainer(linkMeteorData, ListPageDisplay);

export default ListPageContainer;
