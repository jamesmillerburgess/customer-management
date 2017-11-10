import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunitiesDisplay from './OpportunitiesDisplay';

describe('OpportunitiesDisplay Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpportunitiesDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
