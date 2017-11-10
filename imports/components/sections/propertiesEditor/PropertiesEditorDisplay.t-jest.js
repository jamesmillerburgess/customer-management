import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PropertiesEditorDisplay from './PropertiesEditorDisplay';

describe('PropertiesEditorDisplay', () => {
  let wrapper;
  let props = {
    loadedValues: {},
    fields: [{ name: 'name', label: 'name' }],
  };
  beforeEach(() => {
    wrapper = shallow(<PropertiesEditorDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls setIsExpanded on click of the properties title', () => {
    const setIsExpanded = jest.fn();
    wrapper.setProps({ setIsExpanded });
    wrapper.find('.title').simulate('click');
    expect(setIsExpanded).toHaveBeenCalled();
  });
  it('sets the icon class based on isExpanded', () => {
    wrapper.setProps({ isExpanded: true });
    expect(wrapper.find('.title .fa').hasClass('fa-caret-down')).toBe(true);
    wrapper.setProps({ isExpanded: false });
    expect(wrapper.find('.title .fa').hasClass('fa-caret-right')).toBe(true);
  });
  it('renders the fields only if isExpanded', () => {
    wrapper.setProps({ isExpanded: true });
    expect(wrapper.find('.input-group').length).toBe(1);
    wrapper.setProps({ isExpanded: false });
    expect(wrapper.find('.input-group').length).toBe(0);
  });
  it('calls setProperty on change of a property', () => {
    const setProperty = jest.fn();
    wrapper.setProps({ setProperty, isExpanded: true });
    wrapper.find('#name').simulate('change', { target: { value: 'a' } });
    expect(setProperty).toHaveBeenCalled();
  });
  it('sets the button footer class to expanded if isEditingCompany is true', () => {
    wrapper.setProps({ isEditingProperties: true });
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(true);
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(false);
    expect(wrapper.find('.button-footer').props().style.height).toBe('90px');
  });
  it('sets the button footer class to expandable if isEditingCompany is false', () => {
    wrapper.setProps({ isEditingProperties: false });
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(true);
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(false);
    expect(wrapper.find('.button-footer').props().style.height).toBe('0px');
  });
  it('calls save on click of save button in footer', () => {
    const save = jest.fn();
    wrapper.setProps({ save });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(save).toHaveBeenCalled();
  });
  it('renders the number of properties changed in the button footer', () => {
    wrapper.setProps({ numEditedProperties: 1 });
    expect(wrapper.find('.edited-properties Translate').props().value).toBe(
      'editProperties.singularPropertiesChangedText'
    );
    wrapper.setProps({ numEditedProperties: 2 });
    expect(wrapper.find('.edited-properties Translate').props().value).toBe(
      'editProperties.pluralPropertiesChangedText'
    );
  });
});
