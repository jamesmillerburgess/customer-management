import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DataTableDisplay from './DataTableDisplay';

describe('DataTableDisplay', () => {
  let wrapper;
  const props = {
    gridPageProps: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<DataTableDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
