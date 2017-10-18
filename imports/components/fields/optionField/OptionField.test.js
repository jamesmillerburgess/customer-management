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
    wrapper.props().onChange('a');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('returns the entire option on change if there is a valueKey', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange, valueKey: 'a' });
    wrapper.simulate('change', { value: 'b' });
    expect(onChange).lastCalledWith({ value: 'b' });
  });
});
describe('noop Function', () => {
  it('does nothing', () => {
    expect(noop()).toBe(null);
  });
});
