import React from 'react';
import { shallow } from 'enzyme';

import CompaniesContainer from './CompaniesContainer';

describe('CompaniesContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CompaniesContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the CompaniesDisplay component', () => {
    expect(wrapper.name()).toBe('CompaniesDisplay');
  });
});
