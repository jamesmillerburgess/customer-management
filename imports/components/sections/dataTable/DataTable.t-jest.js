import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DataTable from './DataTable';

describe('DataTable', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DataTable />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
