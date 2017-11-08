import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CompanyHeader from './CompanyHeader';

describe('CompanyHeader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyHeader />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
