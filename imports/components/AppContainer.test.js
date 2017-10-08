import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import AppContainer, { linkMeteorData } from './AppContainer';

describe('AppContainer Component', () => {
  let wrapper;
  const collection = new Mongo.Collection();
  const Display = () => <div />;
  const props = {
    match: { params: { objectId: null } },
    loadedValues: {},
    setHasLoaded: jest.fn(),
    setProperty: jest.fn(),
    setLoadedValues: jest.fn(),
    setNote: jest.fn(),
    properties: [{ name: 'a' }],
    collection,
    subscription: 'a',
  };
  beforeEach(() => (wrapper = shallow(<AppContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the AppDisplay component', () => {
    expect(wrapper.name()).toBe('AppDisplay');
  });
});
describe('linkMeteorData Function', () => {
  const collection = new Mongo.Collection();
  const props = {};
  it('sets loading to true if there is no userId', () => {
    Meteor._userId = null;
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets loading to true if there is a userid but the subscription is not ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = false;
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets loading to false if there is a userid and the subscription is ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    expect(linkMeteorData(props).loading).toBe(false);
  });
});
