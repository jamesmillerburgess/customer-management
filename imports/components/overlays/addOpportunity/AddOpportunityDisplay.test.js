import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AddOpportunityDisplay from './AddOpportunityDisplay';

describe('AddOpportunityDisplay', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<AddOpportunityDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
