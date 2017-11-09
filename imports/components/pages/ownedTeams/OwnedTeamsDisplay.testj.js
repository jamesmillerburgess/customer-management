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
  describe('gridPageProps Function', () => {
    it('returns an object', () => {
      expect(typeof gridPageProps()).toBe('object');
    });
    it('renders checkboxes in the first column', () => {
      const Header = gridPageProps({}).columns[0].Header;
      const HeaderWrapper = shallow(<Header />);
      expect(HeaderWrapper.name()).toBe('CheckboxField');
      const Cell = gridPageProps({ rowSelection: [] }).columns[0].Cell;
      const CellWrapper = shallow(<Cell original={{ _id: 'a' }} />);
      expect(CellWrapper.name()).toBe('CheckboxField');
    });
    it('calls setAllRowSelection on change of the header checkbox', () => {
      const setAllRowSelection = jest.fn();
      const Header = gridPageProps({ setAllRowSelection }).columns[0].Header;
      const HeaderWrapper = shallow(
        <Header data={[{ _original: { _id: 'a' } }]} />
      );
      expect(setAllRowSelection).toHaveBeenCalledTimes(0);
      expect(HeaderWrapper.simulate('change', true));
      expect(setAllRowSelection).toHaveBeenCalledTimes(1);
    });
    it('calls setRowSelection on change of the cell checkbox', () => {
      const setRowSelection = jest.fn();
      const Cell = gridPageProps({ setRowSelection, rowSelection: {} })
        .columns[0].Cell;
      const CellWrapper = shallow(<Cell original={{ _id: 'a' }} />);
      expect(setRowSelection).toHaveBeenCalledTimes(0);
      expect(CellWrapper.simulate('change', true));
      expect(setRowSelection).toHaveBeenCalledTimes(1);
    });
    it('renders the date in the create date cells', () => {
      const Cell = gridPageProps().columns[3].Cell;
      const wrapper = shallow(<Cell value="20170101" />);
      expect(wrapper.find('Localize').props().value).toBe('20170101');
    });
  });
});
