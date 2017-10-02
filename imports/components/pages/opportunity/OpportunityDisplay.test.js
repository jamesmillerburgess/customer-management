import React from 'react';
import { shallow } from 'enzyme';

import OpportunityDisplay from './OpportunityDisplay';

describe('OpportunityDisplay', () => {
  let wrapper;
  let props = {
    opportunity: {},
  };
  beforeEach(() => {
    wrapper = shallow(<OpportunityDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
