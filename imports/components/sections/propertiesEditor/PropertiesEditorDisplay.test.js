import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PropertiesEditorDisplay from './PropertiesEditorDisplay';

describe('PropertiesEditorDisplay', () => {
  let wrapper;
  let props = {
    loadedValues: {},
    fields: [{ name: 'name' }],
  };
  beforeEach(() => {
    wrapper = shallow(<PropertiesEditorDisplay {...props} />);
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
    expect(wrapper.find('.edited-properties').text()).toBe(
      "You've changed 1 property"
    );
    wrapper.setProps({ numEditedProperties: 2 });
    expect(wrapper.find('.edited-properties').text()).toBe(
      "You've changed 2 properties"
    );
  });
});
