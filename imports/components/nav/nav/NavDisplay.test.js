import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NavDisplay from './NavDisplay';

describe('NavDisplay', () => {
  const props = {
    user: { username: 'username' },
  };
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls setIsHamburgerOpen on click of hamburger', () => {
    const setIsHamburgerOpen = jest.fn();
    wrapper.setProps({ setIsHamburgerOpen });
    expect(setIsHamburgerOpen).toHaveBeenCalledTimes(0);
    wrapper.find('.hamburger').simulate('click');
    expect(setIsHamburgerOpen).toHaveBeenCalledTimes(1);
  });
  it('sets the open class on hamburger-menu if isHamburgerOpen is true', () => {
    wrapper.setProps({ isHamburgerOpen: true });
    expect(wrapper.find('.hamburger-menu').hasClass('open')).toBe(true);
    wrapper.setProps({ isHamburgerOpen: false });
    expect(wrapper.find('.hamburger-menu').hasClass('open')).toBe(false);
  });
  it('calls setIsHamburgerOpen on click of mobile navlinks', () => {
    const setIsHamburgerOpen = jest.fn();
    wrapper.setProps({ setIsHamburgerOpen });
    expect(setIsHamburgerOpen).toHaveBeenCalledTimes(0);
    wrapper
      .find('NavLink')
      .at(0)
      .simulate('click');
    expect(setIsHamburgerOpen).toHaveBeenCalledTimes(1);
  });
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
  it('renders the team name if there is one', () => {
    wrapper.setProps({ user: {}, team: null });
    expect(wrapper.containsMatchingElement(<div className="team-name" />)).toBe(
      true
    );
    wrapper.setProps({ user: {}, team: { name: 'a' } });
    expect(
      wrapper.containsMatchingElement(<div className="team-name">a</div>)
    ).toBe(true);
  });
});
