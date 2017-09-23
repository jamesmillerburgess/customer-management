import React from 'react';
import { shallow } from 'enzyme';

import NavContainer from './NavContainer';

describe('NavContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the NavDisplay component', () => {
    expect(wrapper.name()).toBe('NavDisplay');
  });
});
