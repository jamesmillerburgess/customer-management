import React from 'react';
import { shallow } from 'enzyme';

import AddCompanyDisplay from './AddCompanyDisplay';

describe('AddCompanyDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddCompanyDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls setName on change of name', () => {
    const setName = jest.fn();
    wrapper.setProps({ setName });
    wrapper.find('#name').simulate('change', { target: { value: 'a' } });
    expect(setName).toHaveBeenCalled();
  });
  it('calls setWebsite on change of website', () => {
    const setWebsite = jest.fn();
    wrapper.setProps({ setWebsite });
    wrapper.find('#website').simulate('change', { target: { value: 'a' } });
    expect(setWebsite).toHaveBeenCalled();
  });
  it('calls create and prevents default on submit', () => {
    const create = jest.fn();
    const preventDefault = jest.fn();
    wrapper.setProps({ create });
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(create).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
});
