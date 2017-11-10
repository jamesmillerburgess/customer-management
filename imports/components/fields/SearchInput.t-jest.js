import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
