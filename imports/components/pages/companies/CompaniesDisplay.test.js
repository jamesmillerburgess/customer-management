import React from 'react';
import { shallow } from 'enzyme';

import CompaniesDisplay, { gridPageProps } from './CompaniesDisplay';

describe('CompaniesDisplay Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompaniesDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls setIsOverlayOpen on click add in header', () => {
    const setIsOverlayOpen = jest.fn();
    wrapper.setProps({ setIsOverlayOpen });
    wrapper
      .find('PageHeader')
      .props()
      .onClickAdd();
    expect(setIsOverlayOpen).toHaveBeenCalled();
  });
  it('passes empty data to GridPage if still loading', () => {
    wrapper.setProps({ loading: true, companies: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual([]);
  });
  it('passes companies to GridPage if not still loading', () => {
    wrapper.setProps({ loading: false, companies: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual(['a']);
  });
  it('sorts the data by createDate', () => {
    wrapper.setProps({
      loading: false,
      companies: [{ createDate: 1 }, { createDate: 2 }],
    });
    expect(wrapper.find('GridPage').props().data).toEqual([
      { createDate: 2 },
      { createDate: 1 },
    ]);
  });
});
describe('gridPageProps Function', () => {
  it('renders a link in the name cells', () => {
    const Cell = gridPageProps([{ _id: 'a' }]).columns[1].Cell({ index: 0 });
    expect(Cell.props.to).toBe('/companies/a');
  });
  it('renders a date in the create date cells', () => {
    const Cell = gridPageProps().columns[2].Cell({ value: '20111031' });
    expect(Cell.props.children).toBe('Oct 31, 2011');
  });
});
