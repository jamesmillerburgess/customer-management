import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, object: { timeline: [] }, loading: true };
  }
  const loading = !Meteor.subscribe('configurations.all').ready();
  Object.keys(props.subscriptions).forEach(key =>
    Meteor.subscribe.apply(null, props.subscriptions[key])
  );
  return { ...props, loading };
};

export const Empty = () => <div />;

const SubscriptionManagerContainer = createContainer(linkMeteorData, Empty);

export default SubscriptionManagerContainer;
