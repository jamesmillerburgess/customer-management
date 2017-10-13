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
});
