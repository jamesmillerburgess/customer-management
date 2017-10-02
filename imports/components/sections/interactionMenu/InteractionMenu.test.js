import React from 'react';
import { shallow } from 'enzyme';

import InteractionMenu from './InteractionMenu';

describe('InteractionMenu Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<InteractionMenu {...props} />);
  });
  it('renders without error', () => {});
});
