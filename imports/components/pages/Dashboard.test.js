import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
