import React from 'react';
import { shallow } from 'enzyme';

import ListPageDisplay from './ListPageDisplay';

describe('ListPageDisplay Component', () => {
  let wrapper;
  const props = { gridPageProps: jest.fn() };
  beforeEach(() => {
    wrapper = shallow(<ListPageDisplay {...props} />);
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
    wrapper.setProps({ loading: true, items: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual([]);
  });
  it('passes items to GridPage if not still loading', () => {
    wrapper.setProps({ loading: false, items: ['a'] });
    expect(wrapper.find('GridPage').props().data).toEqual(['a']);
  });
});
