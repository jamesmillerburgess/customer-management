import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Meteor } from 'meteor/meteor';

Enzyme.configure({ adapter: new Adapter() });

import ListPageConnect, * as LPC from './ListPageConnect';

describe('ListPageConnect.js', () => {
  describe('generateListPageProps Function', () => {
    it('puts a checkbox in the first column', () => {
      const setAllRowSelection = jest.fn();
      const Header = LPC.generateListPageProps().gridPageProps({
        areAllSelected: true,
        setAllRowSelection,
      }).columns[0].Header;
      let props = {
        data: [{ _original: { _id: 'a' } }],
      };
      let wrapper = shallow(<Header {...props} />);
      expect(setAllRowSelection).toHaveBeenCalledTimes(0);
      wrapper.simulate('change');
      expect(setAllRowSelection).toHaveBeenCalledTimes(1);

      const setRowSelection = jest.fn();
      const Cell = LPC.generateListPageProps().gridPageProps({
        areAllSelected: true,
        setRowSelection,
        rowSelection: { a: true },
      }).columns[0].Cell;
      props = {
        original: { _id: 'a' },
      };
      wrapper = shallow(<Cell {...props} />);
      expect(setRowSelection).toHaveBeenCalledTimes(0);
      wrapper.simulate('change');
      expect(setRowSelection).toHaveBeenCalledTimes(1);
    });
    it('defaults the avatar placeholder based on if the plural is contacts', () => {
      let Cell = LPC.generateListPageProps('a', 'contacts').gridPageProps({
        data: [{ _id: 'a' }],
      }).columns[1].Cell;
      let cellProps = { index: 0, original: { avatarURL: 'a' } };
      let wrapper = shallow(<Cell {...cellProps} />);
      expect(wrapper.find('AvatarField').props().publicId).toBe('a');
      wrapper.setProps({ original: {} });
      expect(wrapper.find('AvatarField').props().publicId).toBe(
        'empty-profile-pic_wqnyvm.png'
      );
      Cell = LPC.generateListPageProps('a', 'other').gridPageProps({
        data: [{ _id: 'a' }],
      }).columns[1].Cell;
      cellProps = { index: 0, original: {} };
      wrapper = shallow(<Cell {...cellProps} />);
      expect(wrapper.find('AvatarField').props().publicId).toBe(
        'empty-company-pic_uokzyz'
      );
    });
    it('renders the owner in the third column', () => {
      let Cell = LPC.generateListPageProps('a', 'contacts').gridPageProps({
        data: [{ _id: 'a' }],
      }).columns[2].Cell;
      let cellProps = { value: 'a', index: 0 };
      Meteor.users.docs = [];
      let wrapper = shallow(<Cell {...cellProps} />);
      expect(wrapper.find('AvatarField').props().publicId).toBe(
        'empty-profile-pic_wqnyvm.png'
      );
      Meteor.users.docs = [{ profile: { avatarURL: 'a' } }];
      wrapper.setProps({});
      expect(wrapper.find('AvatarField').props().publicId).toBe('a');
    });
  });
  describe('getOwnerFilter Function', () => {
    it('gets the ownerFilter based on the tableId from ownProps', () => {
      const state = { dataTables: { a: { ownerFilter: 'b' } } };
      const ownProps = { tableId: 'a' };
      expect(LPC.getOwnerFilter(state, ownProps)).toBe('b');
    });
    it('handles missing parameters and properties', () => {
      expect(LPC.getOwnerFilter()).toBe(undefined);
    });
  });
  describe('getPageNumber Function', () => {
    it('gets the pageNumber based on the tableId from ownProps', () => {
      const state = { dataTables: { a: { pageNumber: 'b' } } };
      const ownProps = { tableId: 'a' };
      expect(LPC.getPageNumber(state, ownProps)).toBe('b');
    });
    it('handles missing parameters and properties', () => {
      expect(LPC.getPageNumber()).toBe(0);
    });
  });
  describe('getShowArchived Function', () => {
    it('gets showArchived based on tableId from ownprops', () => {
      const state = { dataTables: { a: { showArchived: true } } };
      const ownProps = { tableId: 'a' };
      expect(LPC.getShowArchived(state, ownProps)).toBe(true);
    });
    it('handles missing parameters and properties', () => {
      expect(LPC.getShowArchived()).toBe(false);
    });
  });
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      const state = {
        dataTables: {
          c: { ownerFilter: 'a', pageNumber: 1, showArchived: true },
        },
        other: 'b',
      };
      const ownProps = { tableId: 'c' };
      expect(LPC.mapStateToProps(state, ownProps)).toEqual({
        ownerFilter: 'a',
        pageNumber: 1,
        showArchived: true,
      });
      state.dataTables.c = {};
      expect(LPC.mapStateToProps(state, ownProps)).toEqual({
        ownerFilter: undefined,
        pageNumber: 0,
        showArchived: false,
      });
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatchers to props', () => {
      const dispatch = jest.fn();
      const props = LPC.mapDispatchToProps(dispatch, { overlay: 'a' });
      expect(props.openOverlay).not.toThrow();
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
  describe('ListPageConnect Component', () => {
    it('connects CompaniesContainer', () => {
      expect(ListPageConnect).toBeInstanceOf(Function);
    });
  });
});
