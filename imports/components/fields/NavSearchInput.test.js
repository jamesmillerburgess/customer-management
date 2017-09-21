import React from 'react';
import { shallow } from 'enzyme';

import NavSearchinput from './NavSearchinput';

describe('NavSearchinput', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavSearchinput />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
