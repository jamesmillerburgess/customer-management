import React from 'react';
import { shallow } from 'enzyme';

import ObjectLink from './ObjectLink';

describe('ObjectLink', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ObjectLink />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
