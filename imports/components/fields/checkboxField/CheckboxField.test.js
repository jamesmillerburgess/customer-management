import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CheckboxField from './CheckboxField';

describe('CheckboxField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CheckboxField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the checkbox is clicked', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('sets the classes according to the value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.hasClass('active')).toBe(true);
    expect(wrapper.find('span').hasClass('fa-check')).toBe(true);
    wrapper.setProps({ value: false });
    expect(wrapper.hasClass('active')).toBe(false);
    expect(wrapper.find('span').hasClass('fa-check')).toBe(false);
  });
});
