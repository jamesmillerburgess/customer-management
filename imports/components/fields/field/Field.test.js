import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('Field Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Field />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('returns TextField if fieldType is TEXT', () => {
    wrapper.setProps({ fieldType: 'TEXT' });
    expect(wrapper.name()).toBe('TextField');
  });
  it('returns NumberField if fieldType is NUMBER', () => {
    wrapper.setProps({ fieldType: 'NUMBER' });
    expect(wrapper.name()).toBe('NumberField');
  });
  it('returns DateField if fieldType is DATE', () => {
    wrapper.setProps({ fieldType: 'DATE' });
    expect(wrapper.name()).toBe('DateField');
  });
  it('returns CompanyField if fieldType is COMPANY', () => {
    wrapper.setProps({ fieldType: 'COMPANY' });
    expect(wrapper.name()).toBe('withRouter(CompanyField)');
  });
  it('returns StatusField if fieldType is STATUS', () => {
    wrapper.setProps({ fieldType: 'STATUS' });
    expect(wrapper.name()).toBe('StatusField');
  });
  it('returns TextField if fieldType is anything else', () => {
    wrapper.setProps({ fieldType: 'SOMETHING_ELSE' });
    expect(wrapper.name()).toBe('TextField');
  });
});
