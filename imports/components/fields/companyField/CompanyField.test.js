import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import CompanyField, {
  renderStakeholder,
  loadOptions,
  filterOption,
  noop,
} from './CompanyField';

describe('CompanyField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CompanyField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    wrapper.simulate('change', {});
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
describe('renderStakeholder Function', () => {
  it('does not throw', () => {
    expect(() => shallow(renderStakeholder({}))).not.toThrow();
  });
});
describe('loadOptions Function', () => {
  it('calls the company.search Meteor Method', () => {
    const companySearch = jest.fn();
    Meteor._methods['company.search'] = companySearch;
    loadOptions('a', () => null);
    expect(companySearch).toHaveBeenCalledTimes(1);
  });
  it('calls the callback', () => {
    const cb = jest.fn();
    loadOptions('a', cb);
    expect(cb).toHaveBeenCalledTimes(1);
  });
  it('handles errors', () => {
    Meteor.err = 'err';
    expect(() => loadOptions('a', () => null)).not.toThrow();
  });
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
