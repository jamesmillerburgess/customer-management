import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CompanyField, { optionRenderer, loadOptions } from './CompanyField';

describe('CompanyField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CompanyField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('renders the icon button only when there is a value', () => {
    wrapper.setProps({ value: {} });
    expect(
      shallow(wrapper.props().render())
        .find('button')
        .exists()
    ).toBe(true);
    wrapper.setProps({ value: false });
    expect(
      shallow(wrapper.props().render())
        .find('button')
        .exists()
    ).toBe(false);
  });
  it('pushes onto the history when the button icon is clicked', () => {
    const history = { push: jest.fn() };
    const preventDefault = jest.fn();
    wrapper.setProps({ value: {}, history });
    expect(history.push).toHaveBeenCalledTimes(0);
    expect(preventDefault).toHaveBeenCalledTimes(0);
    shallow(wrapper.props().render())
      .find('button')
      .simulate('click', { preventDefault });
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
  describe('optionRenderer Function', () => {
    it('does not throw', () => {
      expect(() => shallow(optionRenderer({}))).not.toThrow();
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
});
