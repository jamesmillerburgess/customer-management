import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Field from './Field';
import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection';

describe('Field Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Field />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('returns TextField if type is TEXT', () => {
    wrapper.setProps({ type: 'TEXT' });
    expect(wrapper.name()).toBe('TextField');
  });
  it('returns NumberField if type is NUMBER', () => {
    wrapper.setProps({ type: 'NUMBER' });
    expect(wrapper.name()).toBe('NumberField');
  });
  it('returns DateField if type is DATE', () => {
    wrapper.setProps({ type: 'DATE' });
    expect(wrapper.name()).toBe('DateField');
  });
  it('returns CompanyField if type is COMPANY', () => {
    wrapper.setProps({ type: 'COMPANY' });
    expect(wrapper.name()).toBe('withRouter(CompanyField)');
  });
  it('returns TextField if type is anything else', () => {
    wrapper.setProps({ type: 'SOMETHING_ELSE' });
    expect(wrapper.name()).toBe('TextField');
  });
  it('returns OptionField if there is a matching set of options', () => {
    FieldOptions.docs = [{}];
    wrapper.setProps({ type: 'SOMETHING_ELSE' });
    expect(wrapper.name()).toBe('OptionField');
  });
});
