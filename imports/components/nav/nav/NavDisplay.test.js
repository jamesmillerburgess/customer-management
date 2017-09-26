import React from 'react';
import { shallow } from 'enzyme';

import NavDisplay from './NavDisplay';

describe('NavDisplay', () => {
  const props = {
    user: { username: 'username' },
  };
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls setIsProfileMenuOpen on click of profile button if there is a user', () => {
    const setIsProfileMenuOpen = jest.fn();
    wrapper.setProps({ user: { username: 'username' }, setIsProfileMenuOpen });
    wrapper
      .find('#profile-button')
      .first()
      .simulate('click');
    expect(setIsProfileMenuOpen).toHaveBeenCalled();
  });
  it('does not call setIsProfileMenuOpen on click of profile button if there is not a user', () => {
    const setIsProfileMenuOpen = jest.fn();
    wrapper.setProps({ user: null, setIsProfileMenuOpen });
    wrapper
      .find('#profile-button')
      .first()
      .simulate('click');
    expect(setIsProfileMenuOpen).not.toHaveBeenCalled();
  });
  it("displays 'Log in' if there is no user", () => {
    wrapper.setProps({ user: null });
    expect(wrapper.containsMatchingElement('Log in')).toBe(true);
  });
  it("sets the menu class to 'open' if the state is open", () => {
    wrapper.setProps({ isProfileMenuOpen: true });
    expect(wrapper.find('#profile-menu').hasClass('open')).toBe(true);
  });
  it("removes the 'open' menu class if the state is not open", () => {
    wrapper.setProps({ isProfileMenuOpen: false });
    expect(wrapper.find('#profile-menu').hasClass('open')).toBe(false);
  });
});
