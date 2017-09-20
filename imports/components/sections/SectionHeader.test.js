import React from 'react';
import { shallow } from 'enzyme';

import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<SectionHeader />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
