import React from 'react';
import { shallow } from 'enzyme';

import NavSearchInput from './NavSearchInput';

describe('NavSearchInput', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavSearchInput />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
