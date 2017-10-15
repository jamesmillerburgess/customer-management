import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Timeline, { TIMELINE_MESSAGES, STATUS_VALUES } from './Timeline';

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
  it('renders the text if the entry has text', () => {
    wrapper.setProps({ timeline: [{ id: 'a', text: 'b', type: 'CREATION' }] });
    expect(wrapper.contains(<div>b</div>)).toBe(true);
    wrapper.setProps({ timeline: [{ id: 'a', type: 'CREATION' }] });
    expect(wrapper.contains(<div>b</div>)).toBe(false);
  });
  it('renders the note if the entry has a note', () => {
    wrapper.setProps({ timeline: [{ id: 'a', note: 'b', type: 'CREATION' }] });
    expect(wrapper.contains(<div>b</div>)).toBe(true);
    wrapper.setProps({ timeline: [{ id: 'a', type: 'CREATION' }] });
    expect(wrapper.contains(<div>b</div>)).toBe(false);
  });
  it('renders the outcome if the entry has an outcome', () => {
    wrapper.setProps({ timeline: [{ id: 'a', outcome: 'b', type: 'NOTE' }] });
    expect(
      wrapper.contains(<span className="keyword">Call outcome: </span>)
    ).toBe(true);
    wrapper.setProps({ timeline: [{ id: 'a', type: 'NOTE' }] });
    expect(
      wrapper.contains(<span className="keyword">Call outcome: </span>)
    ).toBe(false);
  });
});
describe('TIMELINE_MESSAGES Object', () => {
  it('returns some functions', () => {
    expect(TIMELINE_MESSAGES.CREATION).not.toThrow();
    expect(TIMELINE_MESSAGES.NOTE).not.toThrow();
    expect(TIMELINE_MESSAGES.CALL).not.toThrow();
    expect(TIMELINE_MESSAGES.EMAIL).not.toThrow();
    expect(TIMELINE_MESSAGES.MEETING).not.toThrow();
    expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_FORWARD({})).not.toThrow();
    expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_BACKWARD({})).not.toThrow();
  });
});
