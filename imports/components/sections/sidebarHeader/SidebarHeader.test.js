import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
