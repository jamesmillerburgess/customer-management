import React from 'react';
import { shallow } from 'enzyme';

import Panel from './Panel';

describe('Panel', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Panel />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
