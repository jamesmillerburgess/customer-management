import React from 'react';
import { shallow } from 'enzyme';

import ContactDisplay from './ContactDisplay';

describe('ContactDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
