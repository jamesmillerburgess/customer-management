import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ListPageDisplay from './ListPageDisplay';

export const sort = (a, b) => b.createDate - a.createDate;

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, items: [] };
  }
  const ownerFilter = {};
  switch (props.tableId) {
    case 'SELF':
      ownerFilter.users = Meteor.userId();
      break;
    case 'TEAM':
      ownerFilter.$in = [(Meteor.user().profile || {}).team || Meteor.userId()];
      break;
    case 'ANY':
    default:
      break;
  }
  const items = props.collection
    .find({
      ...ownerFilter,
      isArchived: false,
    })
    .fetch()
    .sort(sort);
  return { ...props, items };
};

const ListPageContainer = createContainer(linkMeteorData, ListPageDisplay);

export default ListPageContainer;
