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
    // console.log(wrapper.find('.nav-button').first());
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
});
