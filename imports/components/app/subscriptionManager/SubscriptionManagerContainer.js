import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const linkMeteorData = props => {
  if (!Meteor.userId()) {
    return { ...props, object: { timeline: [] }, loading: true };
  }
  const loading = Object.keys(props.subscriptions).reduce(
    (prev, key) =>
      prev || !Meteor.subscribe.apply(null, props.subscriptions[key]).ready(),
    false
  );
  if (loading !== props.loading) {
    props.setLoading(loading);
  }
  return { ...props, loading };
};

export const Empty = () => <div />;

const SubscriptionManagerContainer = createContainer(linkMeteorData, Empty);

export default SubscriptionManagerContainer;
