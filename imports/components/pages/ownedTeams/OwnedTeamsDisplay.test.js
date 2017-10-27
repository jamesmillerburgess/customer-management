import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OwnedTeamsDisplay, { gridPageProps } from './OwnedTeamsDisplay';

describe('OwnedTeamsDisplay Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<OwnedTeamsDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls createTeam on click of the create button', () => {
    const createTeam = jest.fn();
    wrapper.setProps({ createTeam });
    expect(createTeam).toHaveBeenCalledTimes(0);
    wrapper
      .find('.button-primary')
      .at(0)
      .simulate('click');
    expect(createTeam).toHaveBeenCalledTimes(1);
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
    expect(
      wrapper.containsMatchingElement(<div>You've selected 1 row</div>)
    ).toBe(true);
    wrapper.setProps({ numSelectedRows: 2 });
    expect(
      wrapper.containsMatchingElement(<div>You've selected 2 rows</div>)
    ).toBe(true);
    wrapper.setProps({ numSelectedRows: 0 });
    expect(
      wrapper.containsMatchingElement(<div>You've selected 0 rows</div>)
    ).toBe(true);
  });
  it('sets the class and style of the footer depending on areAnySelected', () => {
    wrapper.setProps({ areAnySelected: true });
    expect(wrapper.find('.button-footer').hasClass('expanded')).toBe(true);
    expect(wrapper.find('.button-footer').props().style.height).toBe('90px');
    wrapper.setProps({ areAnySelected: false });
    expect(wrapper.find('.button-footer').hasClass('expandable')).toBe(true);
    expect(wrapper.find('.button-footer').props().style.height).toBe('0px');
  });
  describe('gridPageProps Function', () => {
    it('returns an object', () => {
      expect(typeof gridPageProps()).toBe('object');
    });
    it('renders checkboxes in the first column', () => {
      const Header = gridPageProps({}).columns[0].Header;
      const HeaderWrapper = shallow(<Header />);
      expect(HeaderWrapper.name()).toBe('CheckboxField');
      const Cell = gridPageProps({ rowSelection: [] }).columns[0].Cell;
      const CellWrapper = shallow(<Cell />);
      expect(CellWrapper.name()).toBe('CheckboxField');
    });
    it('calls setAllRowSelection on change of the header checkbox', () => {
      const setAllRowSelection = jest.fn();
      const Header = gridPageProps({ setAllRowSelection }).columns[0].Header;
      const HeaderWrapper = shallow(<Header data={[{}]} />);
      expect(setAllRowSelection).toHaveBeenCalledTimes(0);
      expect(HeaderWrapper.simulate('change', true));
      expect(setAllRowSelection).toHaveBeenCalledTimes(1);
    });
    it('calls setRowSelection on change of the cell checkbox', () => {
      const setRowSelection = jest.fn();
      const Cell = gridPageProps({ setRowSelection, rowSelection: [] })
        .columns[0].Cell;
      const CellWrapper = shallow(<Cell data={[]} />);
      expect(setRowSelection).toHaveBeenCalledTimes(0);
      expect(CellWrapper.simulate('change', true));
      expect(setRowSelection).toHaveBeenCalledTimes(1);
    });
    it('renders the date in the create date cells', () => {
      const Cell = gridPageProps().columns[3].Cell;
      const CellWrapper = shallow(<Cell value={'20170101'} />);
      expect(
        CellWrapper.containsMatchingElement(<span>Jan 01, 2017</span>)
      ).toBe(true);
    });
  });
});
