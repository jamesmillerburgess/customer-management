import React from 'react';
import { shallow } from 'enzyme';

import BasicInfoDisplay from './BasicInfoDisplay';

describe('BasicInfoDisplay Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<BasicInfoDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls preventDefault and saves the profile on submit', () => {
    const saveProfile = jest.fn();
    const e = { preventDefault: jest.fn() };
    wrapper.setProps({ saveProfile });
    expect(e.preventDefault).toHaveBeenCalledTimes(0);
    expect(saveProfile).toHaveBeenCalledTimes(0);
    wrapper.simulate('submit', e);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(saveProfile).toHaveBeenCalledTimes(1);
  });
});
