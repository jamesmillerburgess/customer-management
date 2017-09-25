import React from 'react';
import { shallow } from 'enzyme';

import AddCompanyDisplay from './AddCompanyDisplay';

describe('AddCompanyDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddCompanyDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
