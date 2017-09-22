import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Profile />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
