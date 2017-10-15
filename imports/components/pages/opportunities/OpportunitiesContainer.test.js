import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunitiesContainer from './OpportunitiesContainer';

describe('OpportunitiesContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<OpportunitiesContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the OpportunitiesDisplay component', () => {
    expect(wrapper.name()).toBe('OpportunitiesDisplay');
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
