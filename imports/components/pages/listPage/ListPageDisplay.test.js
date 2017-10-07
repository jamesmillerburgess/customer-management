import React from 'react';
import { shallow } from 'enzyme';

import ListPageDisplay, { gridPageProps } from './ListPageDisplay';

describe('ListPageDisplay Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListPageDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls openOverlay on click add in header', () => {
    const openOverlay = jest.fn();
    wrapper.setProps({ openOverlay });
    wrapper
      .find('PageHeader')
      .props()
      .onClickAdd();
    expect(openOverlay).toHaveBeenCalled();
  });
  it('passes empty data to GridPage if still loading', () => {
    wrapper.setProps({ loading: true, companies: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual([]);
  });
  it('passes companies to GridPage if not still loading', () => {
    wrapper.setProps({ loading: false, companies: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual(['a']);
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
