import React from 'react';
import { shallow } from 'enzyme';

import Timeline from './Timeline';

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
    wrapper.setProps({ timeline: [{ id: 'a' }] });
    expect(
      wrapper
        .find('.timeline-entry')
        .at(1)
        .key()
    ).toBe('a');
  });
  it('renders post lines on all but the last entry', () => {
    wrapper.setProps({ timeline: [{ id: 'a' }, { id: 'b' }] });
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
    wrapper.setProps({ timeline: [{ id: 'a', note: 'b' }] });
    expect(wrapper.find('.timeline-entry .note').length).toBe(1);
    wrapper.setProps({ timeline: [{ id: 'a' }] });
    expect(wrapper.find('.timeline-entry .note').length).toBe(0);
  });
});
