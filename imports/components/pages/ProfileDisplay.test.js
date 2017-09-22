import React from 'react';
import { shallow } from 'enzyme';

import ProfileDisplay from './ProfileDisplay';

describe('ProfileDisplay', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ProfileDisplay />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
