import React from 'react';
import { shallow } from 'enzyme';

import InteractionMenu from './InteractionMenu';

describe('InteractionMenu Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InteractionMenu />);
  });
  afterEach(() => {
    wrapper.unmount();
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
