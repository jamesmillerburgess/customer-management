import React from 'react';
import { shallow } from 'enzyme';

import StatusFlow from './StatusFlow';

describe('StatusFlow Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<StatusFlow {...props} />);
  });
  it('renders without error', () => {});
});
