import React from 'react';
import { shallow } from 'enzyme';

import Contact from './Contact';

describe('Contact Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<Contact {...props} />, options);
  });
  it('renders without error', () => {});
});
