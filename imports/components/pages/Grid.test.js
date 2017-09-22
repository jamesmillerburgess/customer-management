import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

describe('Grid', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Grid />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
