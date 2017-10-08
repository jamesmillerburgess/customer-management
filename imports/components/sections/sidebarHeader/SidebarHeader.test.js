import React from 'react';
import { shallow } from 'enzyme';

import SidebarHeader from './SidebarHeader';

describe('SidebarHeader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SidebarHeader />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
