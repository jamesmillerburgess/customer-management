import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SubscriptionManagerContainer, {
  linkMeteorData,
  Empty,
} from './SubscriptionManagerContainer';

describe('SubscriptionManagerContainer Component', () => {
  let wrapper;
  const collection = new Mongo.Collection();
  beforeEach(() => (wrapper = shallow(<SubscriptionManagerContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps a div', () => {
    expect(wrapper.name()).toBe('Empty');
  });
});
describe('linkMeteorData Function', () => {
  const collection = new Mongo.Collection();
  const props = { subscriptions: {}, setLoading: jest.fn() };
  it('sets loading to true if there is no userId', () => {
    Meteor._userId = null;
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets loading to true if there is a userid but the subscription is not ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = false;
    props.subscriptions.a = ['a'];
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets loading to false if there is a userid and the subscription is ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    expect(linkMeteorData(props).loading).toBe(false);
  });
  it('subscribes to all of the subscriptions', () => {
    Meteor._subscriptions = [];
    props.subscriptions = { a: ['a'], b: ['b'] };
    linkMeteorData(props);
    expect(Meteor._subscriptions).toEqual([['a'], ['b']]);
  });
  it('calls setLoading if loading has changed', () => {
    props.loading = true;
    props.setLoading = jest.fn();
    Meteor._subscriptions = [];
    props.subscriptions = {};
    expect(props.setLoading).toHaveBeenCalledTimes(0);
    linkMeteorData(props);
    expect(props.setLoading).toHaveBeenCalledTimes(1);
    props.loading = false;
    linkMeteorData(props);
    props.setLoading = jest.fn();
    expect(props.setLoading).toHaveBeenCalledTimes(0);
  });
  describe('Empty Component', () => {
    it('is a div', () => {
      expect(Empty().type).toBe('div');
    });
  });
});
