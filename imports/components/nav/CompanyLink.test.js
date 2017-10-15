import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CompanyLink from './CompanyLink';

describe('CompanyLink', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyLink />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
