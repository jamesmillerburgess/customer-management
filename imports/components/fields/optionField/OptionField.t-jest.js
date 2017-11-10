import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OptionField, { noop } from './OptionField';

describe('OptionField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<OptionField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.simulate('change', { value: 'b' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('returns the entire option on change if there is a valueKey', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange, valueKey: 'a' });
    wrapper.simulate('change', { value: 'b' });
    expect(onChange).lastCalledWith({ value: 'b' });
  });
  it('calls onChange with null if the option is null', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    wrapper.simulate('change', null);
    expect(onChange).lastCalledWith(null);
  });
  it('overrides the value and option renderers if not passed', () => {
    const valueRenderer = jest.fn();
    const optionRenderer = jest.fn();
    wrapper.setProps({ valueRenderer, optionRenderer, labelKey: 'a' });
    expect(wrapper.find('Select').props().valueRenderer).toBe(valueRenderer);
    expect(wrapper.find('Select').props().optionRenderer).toBe(optionRenderer);
    wrapper.setProps({ valueRenderer: null, optionRenderer: null });
    expect(() =>
      wrapper
        .find('Select')
        .props()
        .valueRenderer({ a: 'b' })
    ).not.toThrow();
    expect(() =>
      wrapper
        .find('Select')
        .props()
        .optionRenderer({ a: 'b' })
    ).not.toThrow();
    wrapper.setProps({ labelKey: undefined });
    expect(() =>
      wrapper
        .find('Select')
        .props()
        .valueRenderer({ label: 'b' })
    ).not.toThrow();
    expect(() =>
      wrapper
        .find('Select')
        .props()
        .optionRenderer({ label: 'b' })
    ).not.toThrow();
  });
});
describe('noop Function', () => {
  it('does nothing', () => {
    expect(noop()).toBe(null);
  });
});
