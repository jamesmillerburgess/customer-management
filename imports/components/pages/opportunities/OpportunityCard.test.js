import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import {
  OpportunityCardNoContext,
  opportunitySource,
  collect,
} from './OpportunityCard';

describe('OpportunityCard Component', () => {
  let wrapper;
  const props = { connectDragSource: component => component };
  beforeEach(() => {
    wrapper = shallow(<OpportunityCardNoContext {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('does not render if it is dragging', () => {
    wrapper.setProps({ isDragging: true });
    expect(wrapper.find('.panel').exists()).toBe(false);
  });
});
describe('opportunitySource Object', () => {
  describe('beginDrag Function', () => {
    it('extracts the id', () => {
      expect(opportunitySource.beginDrag({ id: 'a', other: 'b' })).toEqual({
        id: 'a',
      });
    });
  });
  describe('endDrag Function', () => {
    it('calls opportunity.setStatus Meteor Method', () => {
      const setStatus = jest.fn();
      Meteor._methods['opportunity.setStatus'] = setStatus;
      expect(setStatus).toHaveBeenCalledTimes(0);
      opportunitySource.endDrag(
        { id: 'a' },
        { getDropResult: () => ({ status: 'b' }) }
      );
      expect(setStatus).toHaveBeenCalledTimes(1);
    });
    it('handles errors', () => {
      Meteor.err = 'err';
      expect(() =>
        opportunitySource.endDrag(
          { id: 'a' },
          { getDropResult: () => ({ status: 'b' }) }
        )
      ).not.toThrow();
    });
  });
});
describe('collect Function', () => {
  it('builds an object', () => {
    const connect = { dragSource: jest.fn() };
    const monitor = { isDragging: jest.fn() };
    expect(typeof collect(connect, monitor)).toBe('object');
  });
});
