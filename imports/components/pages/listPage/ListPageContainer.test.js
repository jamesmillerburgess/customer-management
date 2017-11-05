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
    expect(linkMeteorData(props).data).toEqual([{}]);
    Meteor._userId = null;
    expect(linkMeteorData(props).data).toEqual([]);
  });
});
