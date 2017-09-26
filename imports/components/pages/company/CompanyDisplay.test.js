import React from 'react';
import { shallow } from 'enzyme';

import CompanyDisplay from './CompanyDisplay';

describe('CompanyDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls setProperty on change of a property', () => {
    const setProperty = jest.fn();
    wrapper.setProps({ setProperty });
    wrapper.find('#name').simulate('change', { target: { value: 'a' } });
    expect(setProperty).toHaveBeenCalled();
  });
  it('sets the button footer class to expanded if isEditingCompany is true', () => {
    wrapper.setProps({ isEditingCompany: true });
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(true);
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(false);
    expect(wrapper.find('.button-footer').props().style.height).toBe('90px');
  });
  it('sets the button footer class to expandable if isEditingCompany is false', () => {
    wrapper.setProps({ isEditingCompany: false });
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(true);
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(false);
    expect(wrapper.find('.button-footer').props().style.height).toBe('0px');
  });
  it('calls saveCompany on click of save button in footer', () => {
    const saveCompany = jest.fn();
    wrapper.setProps({ saveCompany });
    wrapper.find('.button-footer .button-primary').simulate('click');
    expect(saveCompany).toHaveBeenCalled();
  });
  it('renders the number of properties changed in the button footer', () => {
    wrapper.setProps({ numEditedProperties: 1 });
    expect(wrapper.find('.edited-properties').text()).toBe(
      "You've changed 1 company property"
    );
    wrapper.setProps({ numEditedProperties: 2 });
    expect(wrapper.find('.edited-properties').text()).toBe(
      "You've changed 2 company properties"
    );
  });
});
