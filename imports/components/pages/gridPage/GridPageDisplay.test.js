import React from 'react';
import { shallow } from 'enzyme';

import GridPageDisplay from './GridPageDisplay';

describe('GridPageDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GridPageDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
