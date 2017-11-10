import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Profile from './Profile';

describe('Profile', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    props.saveProfile = jest.fn();
    props.setUsername = jest.fn();
    wrapper = shallow(<Profile {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
