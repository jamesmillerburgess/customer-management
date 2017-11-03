import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DataTableDisplay from './DataTableDisplay';

describe('DataTableDisplay', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<DataTableDisplay />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
