import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<PageHeader />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
