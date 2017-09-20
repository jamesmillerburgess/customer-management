import React from 'react';
import { shallow } from 'enzyme';

import GridPage from './GridPage';

describe('GridPage', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<GridPage />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
