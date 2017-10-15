import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Grid from './Grid';

describe('Grid', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Grid />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
