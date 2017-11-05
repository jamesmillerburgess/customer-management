import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DataTableDisplay from './DataTableDisplay';

describe('DataTableDisplay.js', () => {
  let wrapper;
  const props = {
    gridPageProps: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<DataTableDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('sets the button class to disabled if disablePrevButton is true', () => {
    wrapper.setProps({ disablePrevButton: true });
    expect(
      wrapper
        .find('.table-pagination button')
        .at(0)
        .hasClass('disabled')
    ).toBe(true);
    wrapper.setProps({ disablePrevButton: false });
    expect(
      wrapper
        .find('.table-pagination button')
        .at(0)
        .hasClass('disabled')
    ).toBe(false);
  });
  it('sets the button class to disabled if disableNextButton is true', () => {
    wrapper.setProps({ disableNextButton: true });
    expect(
      wrapper
        .find('.table-pagination button')
        .at(1)
        .hasClass('disabled')
    ).toBe(true);
    wrapper.setProps({ disableNextButton: false });
    expect(
      wrapper
        .find('.table-pagination button')
        .at(1)
        .hasClass('disabled')
    ).toBe(false);
  });
  it('calls viewPrevPage on click if disablePrevButton is false', () => {
    const viewPrevPage = jest.fn();
    wrapper.setProps({ disablePrevButton: false, viewPrevPage });
    expect(viewPrevPage).toHaveBeenCalledTimes(0);
    wrapper
      .find('.table-pagination button')
      .at(0)
      .simulate('click');
    expect(viewPrevPage).toHaveBeenCalledTimes(1);
    wrapper.setProps({ disablePrevButton: true });
    expect(viewPrevPage).toHaveBeenCalledTimes(1);
    wrapper
      .find('.table-pagination button')
      .at(0)
      .simulate('click');
    expect(viewPrevPage).toHaveBeenCalledTimes(1);
  });
  it('calls viewNextPage on click if disableNextButton is false', () => {
    const viewNextPage = jest.fn();
    wrapper.setProps({ disableNextButton: false, viewNextPage });
    expect(viewNextPage).toHaveBeenCalledTimes(0);
    wrapper
      .find('.table-pagination button')
      .at(1)
      .simulate('click');
    expect(viewNextPage).toHaveBeenCalledTimes(1);
    wrapper.setProps({ disableNextButton: true });
    expect(viewNextPage).toHaveBeenCalledTimes(1);
    wrapper
      .find('.table-pagination button')
      .at(1)
      .simulate('click');
    expect(viewNextPage).toHaveBeenCalledTimes(1);
  });
  it('calls deleteRowSelection on click of the delete button', () => {
    const deleteRowSelection = jest.fn();
    wrapper.setProps({ deleteRowSelection });
    expect(deleteRowSelection).toHaveBeenCalledTimes(0);
    wrapper.find('.button-group .button-secondary').simulate('click');
    expect(deleteRowSelection).toHaveBeenCalledTimes(1);
  });
  it('sets the pluralization of row/rows depending on numSelectedRows', () => {
    wrapper.setProps({ numSelectedRows: 1 });
    expect(wrapper.find('.edited-properties Translate').props().value).toBe(
      'tableEditor.singularSelectedText'
    );
    wrapper.setProps({ numSelectedRows: 2 });
    expect(wrapper.find('.edited-properties Translate').props().value).toBe(
      'tableEditor.pluralSelectedText'
    );
    wrapper.setProps({ numSelectedRows: 0 });
    expect(wrapper.find('.edited-properties Translate').props().value).toBe(
      'tableEditor.pluralSelectedText'
    );
  });
  it('sets the class and style of the footer depending on areAnySelected', () => {
    wrapper.setProps({ areAnySelected: true });
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(true);
    expect(wrapper.find('.button-footer').props().style.height).toBe('90px');
    wrapper.setProps({ areAnySelected: false });
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(true);
    expect(wrapper.find('.button-footer').props().style.height).toBe('0px');
  });
});
