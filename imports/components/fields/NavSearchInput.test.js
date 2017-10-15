import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NavSearchInput from './NavSearchInput';

describe('NavSearchInput', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavSearchInput />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
