import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
  const props = { subscriptions: {} };
  it('sets loading to true if there is no userId', () => {
    Meteor._userId = null;
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets loading to false if there is a userid and it is not logging in', () => {
    Meteor.loggedInUser = {};
    Meteor.isLoggingIn = false;
    expect(linkMeteorData(props).loading).toBe(false);
    Meteor.loggedInUser = null;
    expect(linkMeteorData(props).loading).toBe(true);
    Meteor.loggedInUser = {};
    Meteor.isLoggingIn = true;
    expect(linkMeteorData(props).loading).toBe(true);
  });
  it('sets locale if there is a locale in the profile and it does not equal the app local', () => {
    Meteor.loggedInUser = { profile: { locale: 'a' } };
    const setLocale = jest.fn();
    expect(setLocale).toHaveBeenCalledTimes(0);
    linkMeteorData({ locale: 'b', setLocale });
    expect(setLocale).toHaveBeenCalledTimes(1);
  });
});
