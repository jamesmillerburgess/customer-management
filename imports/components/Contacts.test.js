import React from 'react';
import { shallow } from 'enzyme';

import Contacts from './Contacts';

describe('Contacts', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Contacts />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
