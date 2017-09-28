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
  it('calls create and prevents default on submit', () => {
    const create = jest.fn();
    const preventDefault = jest.fn();
    wrapper.setProps({ create });
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(create).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
  it('sets the class to show if show is true', () => {
    wrapper.setProps({ show: true });
    expect(wrapper.hasClass('show')).toBe(true);
    wrapper.setProps({ show: false });
    expect(wrapper.hasClass('show')).toBe(false);
  });
  it('calls setProp when one of the field values change', () => {
    const setProp = jest.fn();
    wrapper.setProps({ setProp });
    expect(setProp).toHaveBeenCalledTimes(0);
    wrapper
      .find('.input-group')
      .children()
      .at(1)
      .simulate('change', { target: { value: 'a' } });
    expect(setProp).toHaveBeenCalledTimes(1);
  });
});
