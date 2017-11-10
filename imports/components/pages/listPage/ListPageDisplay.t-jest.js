import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
    wrapper.setProps({ loading: true, data: ['a'] });
    expect(
      wrapper.find('withRouter(Connect(DataTableDisplay))').props().data
    ).toEqual([]);
  });
  it('passes items to GridPage if not still loading', () => {
    wrapper.setProps({ loading: false, data: ['a'] });
    expect(
      wrapper.find('withRouter(Connect(DataTableDisplay))').props().data
    ).toEqual(['a']);
  });
});
