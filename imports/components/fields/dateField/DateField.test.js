import React from 'react';
import { shallow } from 'enzyme';

import DateField from './DateField';

describe('DateField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<DateField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
