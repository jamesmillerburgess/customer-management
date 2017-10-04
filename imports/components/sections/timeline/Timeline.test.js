import React from 'react';
import { shallow } from 'enzyme';

import Timeline, { TIMELINE_MESSAGES } from './Timeline';
import { STATUS_VALUES } from '../../fields/statusField/StatusField';

describe('Timeline', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Timeline />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('maps the timeline property to entries', () => {
    wrapper.setProps({ timeline: [{ id: 'a', type: 'CREATION' }] });
    expect(
      wrapper
        .find('.timeline-entry')
        .at(1)
        .key()
    ).toBe('a');
  });
  it('renders post lines on all but the last entry', () => {
    wrapper.setProps({
      timeline: [{ id: 'a', type: 'CREATION' }, { id: 'b', type: 'CREATION' }],
    });
    expect(
      wrapper
        .find('.timeline-entry')
        .at(1)
        .find('.timeline-icon-post-line').length
    ).toBe(1);
    expect(
      wrapper
        .find('.timeline-entry')
        .at(2)
        .find('.timeline-icon-post-line').length
    ).toBe(0);
  });
  it('renders the note if the entry has a note', () => {
    wrapper.setProps({ timeline: [{ id: 'a', note: 'b', type: 'CREATION' }] });
    expect(wrapper.find('.timeline-entry .note').length).toBe(1);
    wrapper.setProps({ timeline: [{ id: 'a', type: 'CREATION' }] });
    expect(wrapper.find('.timeline-entry .note').length).toBe(0);
  });
});
describe('TIMELINE_MESSAGES Object', () => {
  it('returns some functions', () => {
    expect(TIMELINE_MESSAGES.CREATION).not.toThrow();
    expect(TIMELINE_MESSAGES.NOTE).not.toThrow();
    expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_FORWARD({})).not.toThrow();
    expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_BACKWARD({})).not.toThrow();
  });
});
