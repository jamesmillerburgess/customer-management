import React from 'react';
import { shallow } from 'enzyme';

import BasicInfo from './BasicInfo';

describe('BasicInfo Component', () => {
  let wrapper;
  const options = {
    context: { store: { getState: () => ({ profile: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<BasicInfo />, options);
  });
  it('renders without error', () => {});
});
