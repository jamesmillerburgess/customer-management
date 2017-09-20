import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
