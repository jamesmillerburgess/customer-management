import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ListPageDisplay from './ListPageDisplay';

export const sort = (a, b) => b.createDate - a.createDate;

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, items: [], loading: true };
  }
  // const loading = !Meteor.subscribe(props.subscription).ready();
  const loading = false;
  const items = props.collection
    .find({
      users: Meteor.userId(),
      isArchived: false,
    })
    .fetch()
    .sort(sort);
  return { ...props, items, loading };
};

const ListPageContainer = createContainer(linkMeteorData, ListPageDisplay);

export default ListPageContainer;
