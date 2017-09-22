import React from 'react';
import { shallow } from 'enzyme';

import NavDisplay from './NavDisplay';

describe('NavDisplay', () => {
  const props = {
    user: { username: 'username' },
    setIsProfileMenuOpen: jest.fn(),
  };
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('opens and closes the profile menu', () => {
    wrapper
      .find('#profile-button')
      .first()
      .simulate('click');
    expect(props.setIsProfileMenuOpen).toHaveBeenCalled();
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
