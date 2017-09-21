import React from 'react';
import { shallow } from 'enzyme';

import Companies from './Companies';

describe('Companies', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Companies />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
