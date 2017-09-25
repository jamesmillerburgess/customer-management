import React from 'react';
import { shallow } from 'enzyme';

import CompanyDisplay from './CompanyDisplay';

describe('CompanyDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
