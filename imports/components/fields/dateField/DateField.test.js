import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import DateField from './DateField';

describe('DateField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<DateField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.props().onChange(moment('20170101'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
