import React from 'react';
import { shallow } from 'enzyme';

import NumberField from './NumberField';

describe('NumberField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NumberField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.simulate('change', { target: { value: 'a' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
