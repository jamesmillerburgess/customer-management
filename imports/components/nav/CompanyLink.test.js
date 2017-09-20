import React from 'react';
import { shallow } from 'enzyme';

import CompanyLink from './CompanyLink';

describe('CompanyLink', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyLink />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
