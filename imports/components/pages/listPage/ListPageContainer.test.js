import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ListPageContainer, { sort, linkMeteorData } from './ListPageContainer';

describe('ListPageContainer Component', () => {
  let wrapper;
  const props = { collection: new Mongo.Collection() };
  beforeEach(() => (wrapper = shallow(<ListPageContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the ListPageDisplay component', () => {
    expect(wrapper.name()).toBe('ListPageDisplay');
  });
  it('returns no items if there is no user', () => {
    Meteor._userId = {};
    props.collection.docs = [{}];
    expect(linkMeteorData(props).items).toEqual([{}]);
    Meteor._userId = null;
    expect(linkMeteorData(props).items).toEqual([]);
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
