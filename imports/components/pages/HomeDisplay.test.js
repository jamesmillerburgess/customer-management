import React from 'react';
import { shallow } from 'enzyme';

import HomeDisplay from './HomeDisplay';

describe('HomeDisplay', () => {
  let wrapper;
  const dispatchers = {
    setUsername: jest.fn(),
    setPassword: jest.fn(),
    setPasswordAgain: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<HomeDisplay dispatchers={dispatchers} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('dispatches on change of username value', () => {
    wrapper.find('#username').simulate('change', { target: { value: 'a' } });
    expect(dispatchers.setUsername).toHaveBeenCalled();
  });
  it('dispatches on change of password value', () => {
    wrapper.find('#password').simulate('change', { target: { value: 'a' } });
    expect(dispatchers.setPassword).toHaveBeenCalled();
  });
});
