import React from 'react';
import { shallow } from 'enzyme';

import NavDisplay from './NavDisplay';

describe('NavDisplay', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavDisplay />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
