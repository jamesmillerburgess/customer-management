import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

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
});
describe('noop Function', () => {
  it('does nothing', () => {
    expect(noop()).toBe(null);
  });
});
