import { Meteor } from 'meteor/meteor';

import DataTableConnect, * as DTC from './DataTableConnect';

describe('DataTableConnect', () => {
  describe('getPageNumber Function', () => {
    it('returns the page number for the given table', () => {
      const state = {
        dataTables: { a: { pageNumber: 1 }, b: { pageNumber: 2 } },
      };
      const ownProps = { tableId: 'a' };
      expect(DTC.getPageNumber(state, ownProps)).toBe(1);
      ownProps.tableId = 'b';
      expect(DTC.getPageNumber(state, ownProps)).toBe(2);
    });
    it('handles missing properties', () => {
      let state = {
        dataTables: { a: { pageNumber: 1 } },
      };
      let ownProps = {};
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
      state.dataTables.a.pageNumber = null;
      ownProps.tableId = 'b';
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
      state.dataTables.a = null;
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
      state.dataTables = null;
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
      state = null;
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
      ownProps = null;
      expect(DTC.getPageNumber(state, ownProps)).toBe(0);
    });
  });
  describe('getVisibleRows Function', () => {
    it('returns the first ten rows if pageNumber is 0', () => {
      const pageNumber = 0;
      const ownProps = { data: [] };
      for (let i = 0; i < 20; i++) {
        ownProps.data.push(i);
      }
      const visibleRows = DTC.getVisibleRows(pageNumber, ownProps);
      expect(visibleRows.length).toBe(10);
      expect(visibleRows[0]).toBe(0);
      expect(visibleRows[9]).toBe(9);
    });
    it('returns rows 11 through 20 otherwise', () => {
      let pageNumber = 1;
      const ownProps = { data: [] };
      for (let i = 0; i < 30; i++) {
        ownProps.data.push(i);
      }
      let visibleRows = DTC.getVisibleRows(pageNumber, ownProps);
      expect(visibleRows.length).toBe(10);
      expect(visibleRows[0]).toBe(10);
      expect(visibleRows[9]).toBe(19);
      pageNumber = 2;
      visibleRows = DTC.getVisibleRows(pageNumber, ownProps);
      expect(visibleRows.length).toBe(10);
      expect(visibleRows[0]).toBe(10);
      expect(visibleRows[9]).toBe(19);
      pageNumber = 3;
      visibleRows = DTC.getVisibleRows(pageNumber, ownProps);
      expect(visibleRows.length).toBe(10);
      expect(visibleRows[0]).toBe(10);
      expect(visibleRows[9]).toBe(19);
    });
    it('handles missing properties', () => {
      expect(DTC.getVisibleRows()).toEqual([]);
    });
  });
  describe('getRowSelection Function', () => {
    it('gets the rowSelection based on the tableId from ownProps', () => {
      const state = {
        dataTables: { a: { rowSelection: 'a' }, b: { rowSelection: 'b' } },
      };
      const ownProps = { tableId: 'a' };
      expect(DTC.getRowSelection(state, ownProps)).toBe('a');
      ownProps.tableId = 'b';
      expect(DTC.getRowSelection(state, ownProps)).toBe('b');
    });
    it('handles missing properties', () => {
      let state = {
        dataTables: { a: { rowSelection: 'a' } },
      };
      let ownProps = {};
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
      ownProps.tableId = 'a';
      state.dataTables.a.rowSelection = null;
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
      state.dataTables.a = null;
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
      state.dataTables = null;
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
      state = null;
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
      ownProps = null;
      expect(DTC.getRowSelection(state, ownProps)).toEqual([]);
    });
  });
  describe('getAreAnySelected Function', () => {
    it('returns true if any rowSelection property is true and false otherwise', () => {
      let rowSelection = { a: true, b: false };
      expect(DTC.getAreAnySelected(rowSelection)).toBe(true);
      rowSelection = { a: false, b: true };
      expect(DTC.getAreAnySelected(rowSelection)).toBe(true);
      rowSelection = { a: true, b: true };
      expect(DTC.getAreAnySelected(rowSelection)).toBe(true);
      rowSelection = { a: false, b: false };
      expect(DTC.getAreAnySelected(rowSelection)).toBe(false);
      rowSelection = {};
      expect(DTC.getAreAnySelected(rowSelection)).toBe(false);
    });
  });
  describe('getNumSelectedRows Function', () => {
    it('gets the number of selected rows by counting the true properties', () => {
      let rowSelection = { a: true, b: false, c: true };
      expect(DTC.getNumSelectedRows(rowSelection)).toBe(2);
    });
    it('handles missing properties', () => {
      let rowSelection = null;
      expect(DTC.getNumSelectedRows(rowSelection)).toBe(0);
    });
  });
  describe('getAreAllSelected Function', () => {
    it('checks if all rows in visibleRows are selected in rowSelection', () => {
      let rowSelection = { a: true, b: false, c: true };
      let visibleRows = [{ _id: 'a' }, { _id: 'b' }];
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
      rowSelection = { a: true, b: true, c: true };
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(true);
      rowSelection = { a: true, b: true, c: false };
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(true);
    });
    it('handles missing properties', () => {
      let rowSelection = {};
      let visibleRows = [{ _id: 'a' }];
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
      visibleRows = [{}];
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
      visibleRows = [];
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
      visibleRows = undefined;
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
      rowSelection = undefined;
      expect(DTC.getAreAllSelected(rowSelection, visibleRows)).toBe(false);
    });
  });
  describe('getDisablePrevButton Function', () => {
    it('returns true only if pageNumber is 0', () => {
      let pageNumber = 0;
      expect(DTC.getDisablePrevButton(pageNumber)).toBe(true);
      pageNumber = 1;
      expect(DTC.getDisablePrevButton(pageNumber)).toBe(false);
      pageNumber = 2;
      expect(DTC.getDisablePrevButton(pageNumber)).toBe(false);
    });
  });
  describe('getDisableNextButton Function', () => {
    it('returns true if there are more rows in data beyond what is visible', () => {
      let pageNumber = 0;
      const ownProps = { data: [] };
      expect(DTC.getDisableNextButton(pageNumber, ownProps)).toBe(true);
      for (let i = 0; i < 20; i++) {
        ownProps.data.push(i);
      }
      expect(DTC.getDisableNextButton(pageNumber, ownProps)).toBe(false);
      pageNumber = 1;
      expect(DTC.getDisableNextButton(pageNumber, ownProps)).toBe(true);
      ownProps.data.push(20);
      expect(DTC.getDisableNextButton(pageNumber, ownProps)).toBe(false);
    });
    it('handles missing properties', () => {
      let pageNumber = undefined;
      let ownProps = undefined;
      expect(DTC.getDisableNextButton(pageNumber, ownProps)).toBe(true);
    });
  });
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      const state = {};
      const ownProps = {};
      expect(() => DTC.mapStateToProps(state, ownProps)).not.toThrow();
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatchers to props', () => {
      const dispatch = jest.fn();
      const ownProps = {
        tableId: 'a',
        deleteRows: jest.fn().mockImplementation((x, cb) => cb()),
      };
      const props = DTC.mapDispatchToProps(dispatch, ownProps);
      expect(props.setAllRowSelection).not.toThrow();
      expect(props.setRowSelection).not.toThrow();
      expect(props.deleteRowSelection).not.toThrow();
      expect(props.viewPrevPage).not.toThrow();
      expect(props.viewNextPage).not.toThrow();
    });
  });
  describe('DataTableConnect Component', () => {
    it('connects CompaniesContainer', () => {
      expect(DataTableConnect).toBeInstanceOf(Function);
    });
  });
});
