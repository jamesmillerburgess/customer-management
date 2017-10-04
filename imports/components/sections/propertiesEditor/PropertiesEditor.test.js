import React from 'react';
import { shallow } from 'enzyme';

import PropertiesEditor from './PropertiesEditor';

describe('PropertiesEditor Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<PropertiesEditor {...props} />);
  });
  it('renders without error', () => {});
});
