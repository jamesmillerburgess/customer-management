import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import CompaniesContainer from './CompaniesContainer';

describe('CompaniesContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CompaniesContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the CompaniesDisplay component', () => {
    expect(wrapper.name()).toBe('CompaniesDisplay');
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
