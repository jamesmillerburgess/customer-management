import React from 'react';
import { shallow } from 'enzyme';

import OpportunitiesDisplay from './OpportunitiesDisplay';

describe('OpportunitiesDisplay Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpportunitiesDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
