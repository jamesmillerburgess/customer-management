import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import ListPageContainer, { sort } from './ListPageContainer';

describe('ListPageContainer Component', () => {
  let wrapper;
  const props = { collection: new Mongo.Collection() };
  beforeEach(() => (wrapper = shallow(<ListPageContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the ListPageDisplay component', () => {
    expect(wrapper.name()).toBe('ListPageDisplay');
  });
  it('is loading if subscription is not ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = false;
    wrapper.setProps({ a: 'a' });
    expect(wrapper.props().loading).toBe(true);
  });
  it('is not loading if subscription is ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    wrapper.setProps({ a: 'a' });
    expect(wrapper.props().loading).toBe(false);
  });
});
describe('sort Function', () => {
  it('sorts by createdDate', () => {
    const a = { createDate: new Date('January 1, 2017') };
    const b = { createDate: new Date('January 2, 2017') };
    expect(sort(a, b) > 0).toEqual(true);
    expect(sort(b, a) < 0).toEqual(true);
    expect(sort(a, a) === 0).toEqual(true);
  });
});
