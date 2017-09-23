import React from 'react';
import { shallow } from 'enzyme';

import CompaniesDisplay from './CompaniesDisplay';

describe('CompaniesDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompaniesDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
