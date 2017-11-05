import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DataTableDisplay from './DataTableDisplay';

describe('DataTableDisplay', () => {
  let wrapper;
  const props = {
    gridPageProps: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<DataTableDisplay {...props} />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
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
