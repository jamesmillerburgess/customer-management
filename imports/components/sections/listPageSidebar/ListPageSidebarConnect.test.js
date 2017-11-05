import { Meteor } from 'meteor/meteor';
import ListPageSidebarConnect, * as LPSC from './ListPageSidebarConnect';

describe('ListPageSidebarConnect.js', () => {
  describe('getOwnerFilter Function', () => {
    it('gets the ownerFilter based on the tableId in ownProps', () => {
      const state = { dataTables: { a: { ownerFilter: 'b' } } };
      const ownProps = { tableId: 'a' };
      expect(LPSC.getOwnerFilter(state, ownProps)).toBe('b');
    });
    it('handles missing parameters and properties', () => {
      expect(LPSC.getOwnerFilter()).toBe('SELF');
    });
  });
  describe('ListPageSidebarConnect Component', () => {
    it('returns a function', () => {
      expect(ListPageSidebarConnect).toBeInstanceOf(Function);
    });
  });
  describe('mapStateToProps Function', () => {
    it('selects the filter based on the match path', () => {
      const state = { dataTables: { c: { ownerFilter: 'b' } } };
      const ownProps = { match: { path: 'a' }, tableId: 'c' };
      expect(LPSC.mapStateToProps(state, ownProps).ownerFilter).toBe('b');
      state.dataTables.c.ownerFilter = undefined;
      expect(LPSC.mapStateToProps(state, ownProps).ownerFilter).toBe('SELF');
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps login dispatchers', () => {
      const dispatch = jest.fn();
      const ownProps = { match: { path: 'a' } };
      const props = LPSC.mapDispatchToProps(dispatch, ownProps);
      expect(props.setOwnerFilter).not.toThrow();
    });
  });
});
