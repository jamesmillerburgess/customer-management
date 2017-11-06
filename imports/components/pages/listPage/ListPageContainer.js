import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ListPageDisplay from './ListPageDisplay';

import Teams from '../../../api/team/teamCollection';

export const getTeamMembers = () =>
  (Teams.findOne(((Meteor.user() || {}).profile || {}).team || '') || {})
    .members || [Meteor.userId()];

export const getOwnerQuery = ownerFilter => {
  switch (ownerFilter) {
    case 'ANY':
      return {};
    case 'TEAM':
      return {
        'users.0': { $in: getTeamMembers() },
      };
    case 'SELF':
    default:
      return { 'users.0': { $in: [Meteor.userId()] } };
  }
};

export const getData = props => {
  const query = getOwnerQuery(props.ownerFilter);
  if (!props.showArchived) {
    query.isArchived = false;
  }
  const data = props.collection
    .find(query, { sort: { createDate: -1 } })
    .fetch();
  return data;
};

export const getArchiveObjects = props => (selectedObjects, cb) => {
  Meteor.call(
    `${props.tableId}.archive`,
    Object.keys(selectedObjects),
    (err, res) => {
      if (err) {
        console.error(err);
      }
    }
  );
  cb();
};

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, data: [] };
  }
  const data = getData(props);
  const archiveObjects = getArchiveObjects(props);
  return { ...props, data, archiveObjects };
};

const ListPageContainer = createContainer(linkMeteorData, ListPageDisplay);

export default ListPageContainer;
