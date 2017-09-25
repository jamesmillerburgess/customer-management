import React from 'react';
import { shallow } from 'enzyme';

import Timeline from './Timeline';

describe('Timeline', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Timeline />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
