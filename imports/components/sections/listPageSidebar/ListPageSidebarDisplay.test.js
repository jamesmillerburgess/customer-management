import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ListPageSidebarDisplay from './ListPageSidebarDisplay';

describe('ListPageSidebarDisplay Component', () => {
  let wrapper;
  const props = { filter: '' };
  beforeEach(() => {
    wrapper = shallow(<ListPageSidebarDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
