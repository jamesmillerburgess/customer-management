import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ObjectEditorContainer, { linkMeteorData } from './ObjectEditorContainer';

describe('ObjectEditorContainer Component', () => {
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
  beforeEach(
    () => (wrapper = shallow(ObjectEditorContainer(Display)(...props)))
  );
  afterEach(() => wrapper.unmount());
  it('wraps the Display component', () => {
    expect(wrapper.name()).toBe('div');
  });
});
describe('linkMeteorData Function', () => {
  const collection = new Mongo.Collection();
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
  it('passes an empty object if none is found', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    collection.docs = [];
    expect(linkMeteorData(props).object.name).toBe('');
    expect(linkMeteorData(props).object.timeline).toEqual([]);
  });
  it('sets up the data if it finds a object and has not already loaded', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    collection.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
    };
    const newProps = {
      ...props,
      hasLoaded: false,
      loadedValues: {},
      ...fns,
    };
    linkMeteorData(newProps);
    expect(fns.setHasLoaded).toHaveBeenCalled();
    expect(fns.setProperty).toHaveBeenCalled();
    expect(fns.setLoadedValues).toHaveBeenCalled();
  });
  it('sets up the data if it finds a object and the _id is different than the loaded value', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    collection.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
      setNote: jest.fn(),
    };
    const newProps = {
      ...props,
      hasLoaded: true,
      loadedValues: { _id: 'b' },
      ...fns,
    };
    linkMeteorData(newProps);
    expect(fns.setHasLoaded).toHaveBeenCalled();
    expect(fns.setProperty).toHaveBeenCalled();
    expect(fns.setLoadedValues).toHaveBeenCalled();
  });
  it('does not set up the data if it finds a object and has already loaded', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    collection.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
      setNote: jest.fn(),
    };
    const newProps = {
      ...props,
      hasLoaded: true,
      loadedValues: { _id: 'a' },
      ...fns,
    };
    linkMeteorData(newProps);
    expect(fns.setHasLoaded).not.toHaveBeenCalled();
    expect(fns.setProperty).not.toHaveBeenCalled();
    expect(fns.setLoadedValues).not.toHaveBeenCalled();
    expect(fns.setNote).not.toHaveBeenCalled();
  });
});
