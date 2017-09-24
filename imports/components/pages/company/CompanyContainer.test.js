import React from 'react';
import { shallow } from 'enzyme';

import CompanyContainer from './CompanyContainer';

describe('CompanyContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CompanyContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the CompanyDisplay component', () => {
    expect(wrapper.name()).toBe('CompanyDisplay');
  });
});
