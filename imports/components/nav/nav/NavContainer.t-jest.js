import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
