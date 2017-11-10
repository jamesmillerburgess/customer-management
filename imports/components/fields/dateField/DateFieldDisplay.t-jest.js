import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DateFieldDisplay from './DateFieldDisplay';

describe('DateFieldDisplay Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<DateFieldDisplay />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.props().onChange(moment('20170101'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('does not call onChange if a date is not chosen', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.props().onChange('a');
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
