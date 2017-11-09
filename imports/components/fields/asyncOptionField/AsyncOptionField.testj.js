import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AsyncOptionField, {
  filterOption,
  optionRenderer,
  filterBySearch,
} from './AsyncOptionField';

describe('AsyncOptionField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<AsyncOptionField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('sets the options to an empty array if the value does not exist', () => {
    const field = shallow(<AsyncOptionField />);
    expect(field.state('options')).toEqual([]);
  });
  it('adds the clear option if available', () => {
    const field = shallow(<AsyncOptionField clearOption="a" />);
    expect(field.state('options')).toEqual([{ _id: '', name: 'a' }]);
  });
  describe('onOpen Function', () => {
    let onOpen;
    beforeEach(() => ({ onOpen } = wrapper.instance()));
    it('does not throw', () => {
      Meteor.methods({
        a: searchText => {
          return { searchResults: [], searchText };
        },
      });
      Meteor.err = null;
      Meteor.res = { searchResults: [], searchText: '' };
      wrapper.setProps({ searchMethod: 'a' });
      wrapper.setState({ inputValue: '' });
      expect(onOpen).not.toThrow();
    });
  });
  describe('mergeResults Function', () => {
    let mergeResults;
    beforeEach(() => ({ mergeResults } = wrapper.instance()));
    it('puts the first set of results first', () => {
      const a = [{ _id: 1 }, { _id: 3 }];
      const b = [{ _id: 2 }];
      expect(mergeResults(a, b)).toEqual([{ _id: 1 }, { _id: 3 }, { _id: 2 }]);
    });
    it('eliminates duplicates', () => {
      const a = [{ _id: 1 }, { _id: 2 }];
      const b = [{ _id: 2 }];
      expect(mergeResults(a, b)).toEqual([{ _id: 1 }, { _id: 2 }]);
    });
    it('inserts the clearOption if it is applicable and missing', () => {
      const a = [{ _id: 1 }];
      const b = [];
      wrapper.setProps({ clearOption: 'a' });
      expect(mergeResults(a, b)).toEqual([{ _id: '', name: 'a' }, { _id: 1 }]);
      expect(mergeResults(b, b)).toEqual([{ _id: '', name: 'a' }]);
      wrapper.setProps({ clearOption: '' });
      expect(mergeResults(a, b)).toEqual([{ _id: 1 }]);
      wrapper.setProps({ clearOption: undefined });
      expect(mergeResults(a, b)).toEqual([{ _id: 1 }]);
    });
    it('limits the results to ten', () => {
      const a = [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 4 },
        { _id: 5 },
        { _id: 6 },
        { _id: 7 },
        { _id: 8 },
        { _id: 9 },
        { _id: 10 },
        { _id: 11 },
      ];
      expect(mergeResults(a, []).length).toBe(10);
    });
  });
  describe('handleServerResults Function', () => {
    let handleServerResults;
    beforeEach(() => ({ handleServerResults } = wrapper.instance()));
    it('sets the state if the result searchText equals the current inputValue', () => {
      const cb = jest.fn();
      wrapper.instance().state.inputValue = 'a';
      expect(cb).toHaveBeenCalledTimes(0);
      handleServerResults(null, { searchText: 'a', searchResults: ['b'] }, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      wrapper.instance().state.options = [];
      handleServerResults(null, { searchText: 'c', searchResults: ['b'] }, cb);
      expect(cb).toHaveBeenCalledTimes(1);
    });
    it('handles errors', () => {
      wrapper.instance().state.inputValue = 'a';
      expect(() => handleServerResults('err', {})).not.toThrow();
    });
  });
  describe('onInputChange Function', () => {
    let onInputChange;
    beforeEach(() => ({ onInputChange } = wrapper.instance()));
    it('does not throw', () => {
      Meteor.methods({
        a: searchText => {
          return { searchResults: [], searchText };
        },
      });
      Meteor.err = null;
      Meteor.res = { searchResults: [], searchText: 'a' };
      wrapper.setProps({ searchMethod: 'a' });
      wrapper.setState({ inputValue: 'a' });
      expect(() => onInputChange('a')).not.toThrow();
    });
  });
  describe('filterOption Function', () => {
    it('always returns true', () => {
      expect(filterOption()).toBe(true);
    });
  });
  describe('optionRenderer Function', () => {
    it('renders the option name', () => {
      const option = shallow(optionRenderer({ name: 'a' }));
      expect(option.containsMatchingElement(<div>a</div>)).toBe(true);
    });
  });
  describe('filterBySearch Function', () => {
    it('filters based on the search', () => {
      expect(
        filterBySearch([{ name: 'abc' }, { name: 'abd' }], 'abc')
      ).toEqual([{ name: 'abc' }]);
    });
  });
});
