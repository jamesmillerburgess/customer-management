import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import {
  OpportunityListNoContext,
  listTarget,
  collect,
} from './OpportunityList';

describe('OpportunityList Component', () => {
  let wrapper;
  const props = { connectDropTarget: component => component };
  beforeEach(() => {
    wrapper = shallow(<OpportunityListNoContext {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders a dummy card if it is hovered over', () => {
    wrapper.setProps({ isOver: false });
    expect(wrapper.find('.dummy-title').exists()).toBe(false);
    wrapper.setProps({ isOver: true });
    expect(wrapper.find('.dummy-title').exists()).toBe(true);
  });
});
describe('listTarget Object', () => {
  describe('drop Function', () => {
    it('extracts the status', () => {
      expect(listTarget.drop({ status: 'a', other: 'b' })).toEqual({
        status: 'a',
      });
    });
  });
});
describe('collect Function', () => {
  it('builds an object', () => {
    const connect = { dropTarget: jest.fn() };
    const monitor = { isOver: jest.fn() };
    expect(typeof collect(connect, monitor)).toBe('object');
  });
});
