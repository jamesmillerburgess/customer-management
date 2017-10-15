import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AsyncOptionField, { filterOption, noop } from './AsyncOptionField';

describe('AsyncOptionField Component', () => {
  let wrapper;
  const props = { loadOptions: jest.fn() };
  beforeEach(() => (wrapper = shallow(<AsyncOptionField {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when changed', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.props().onChange({});
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  describe('filterOption function', () => {
    it('always returns true', () => {
      expect(filterOption()).toBe(true);
    });
  });
  describe('noop Function', () => {
    it('does nothing', () => {
      expect(noop()).toBe(null);
    });
  });
});
