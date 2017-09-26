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
  it('calls setNote on change of note', () => {
    const setNote = jest.fn();
    wrapper.setProps({ setNote });
    wrapper.find('#note').simulate('change', { target: { value: 'a' } });
    expect(setNote).toHaveBeenCalled();
  });
  it('sets the note button group class to expanded if isWritingNote is true', () => {
    wrapper.setProps({ isWritingNote: true });
    expect(wrapper.find('.menu-panel .button-group').hasClass('expanded')).toBe(
      true
    );
    expect(
      wrapper.find('.menu-panel .button-group').hasClass('expandable')
    ).toBe(false);
  });
  it('sets the note button group class to expandable if isWritingNote is false', () => {
    wrapper.setProps({ isWritingNote: false });
    expect(
      wrapper.find('.menu-panel .button-group').hasClass('expandable')
    ).toBe(true);
    expect(wrapper.find('.menu-panel .button-group').hasClass('expanded')).toBe(
      false
    );
  });
  it('calls addNote on click of save if isWritingNote is true', () => {
    const addNote = jest.fn();
    wrapper.setProps({ addNote, isWritingNote: true });
    wrapper.find('.menu-panel .button-primary').simulate('click');
    expect(addNote).toHaveBeenCalled();
  });
  it('does not call addNote on click of save if isWritingNote is false', () => {
    const addNote = jest.fn();
    wrapper.setProps({ addNote, isWritingNote: false });
    wrapper.find('.menu-panel .button-primary').simulate('click');
    expect(addNote).not.toHaveBeenCalled();
  });
  it('calls cancelNote on click of save if isWritingNote is true', () => {
    const cancelNote = jest.fn();
    wrapper.setProps({ cancelNote, isWritingNote: true });
    wrapper.find('.menu-panel .button-secondary').simulate('click');
    expect(cancelNote).toHaveBeenCalled();
  });
  it('does not call cancelNote on click of save if isWritingNote is false', () => {
    const cancelNote = jest.fn();
    wrapper.setProps({ cancelNote, isWritingNote: false });
    wrapper.find('.menu-panel .button-secondary').simulate('click');
    expect(cancelNote).not.toHaveBeenCalled();
  });
});
