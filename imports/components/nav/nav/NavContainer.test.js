import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import NavContainer from './NavContainer';

describe('NavContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the NavDisplay component', () => {
    expect(wrapper.name()).toBe('NavDisplay');
  });
  it('subscribes to the team if there is a user', () => {
    Meteor.loggedInUser = { profile: { team: 'a' } };
    wrapper.setProps({});
    expect(wrapper.props().user.profile.team).toBe('a');
  });
});
