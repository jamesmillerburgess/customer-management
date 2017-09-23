import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import ProfileContainer from './ProfileContainer';

describe('ProfileContainer Component', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    props.setHasLoaded = jest.fn();
    props.setUsername = jest.fn();
  });
  afterEach(() => wrapper.unmount());
  it('wraps the ProfileDisplay component', () => {
    Meteor.loggedInUser = { username: 'a' };
    Meteor.isLoggingIn = false;
    wrapper = shallow(<ProfileContainer {...props} />);
    expect(wrapper.name()).toBe('ProfileDisplay');
  });
  it('calls setHasLoaded and setUsername if it has not loaded yet', () => {
    Meteor.loggedInUser = { username: 'a' };
    Meteor.isLoggingIn = false;
    shallow(<ProfileContainer {...props} />);
    expect(props.setHasLoaded).toHaveBeenCalled();
    expect(props.setUsername).toHaveBeenCalled();
  });
  it('does not call setHasLoaded and setUserandm if it has loaded', () => {
    Meteor.isLoggingIn = true;
    shallow(<ProfileContainer {...props} />);
    expect(props.setHasLoaded).not.toHaveBeenCalled();
    expect(props.setUsername).not.toHaveBeenCalled();
  });
});
