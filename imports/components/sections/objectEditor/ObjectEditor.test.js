import React from 'react';
import { shallow } from 'enzyme';

import ObjectEditor from './ObjectEditor';

describe('ObjectEditor Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<ObjectEditor {...props} />);
  });
  it('renders without error', () => {});
});
