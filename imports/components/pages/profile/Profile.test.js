import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    props.saveProfile = jest.fn();
    props.setUsername = jest.fn();
    wrapper = shallow(<Profile {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls saveProfile and prevents default on submit', () => {
    const e = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(props.saveProfile).toHaveBeenCalled();
  });
  it('calls setUsername on change of username', () => {
    wrapper.find('#username').simulate('change', { target: { value: 'a' } });
    expect(props.setUsername).toHaveBeenCalled();
  });
});
