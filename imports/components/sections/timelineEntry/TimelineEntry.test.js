import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TimelineEntry, {
  TIMELINE_MESSAGES,
  STATUS_VALUES,
} from './TimelineEntry';

describe('TimelineEntry Component', () => {
  let wrapper;
  let props = { type: 'CREATION' };
  beforeEach(() => {
    wrapper = shallow(<TimelineEntry {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders post line if the entry is not last', () => {
    wrapper.setProps({ isNotLast: true });
    expect(wrapper.find('.timeline-icon-post-line').length).toBe(1);
    wrapper.setProps({ isNotLast: false });
    expect(wrapper.find('.timeline-icon-post-line').length).toBe(0);
  });
  it('renders the text if the entry has text', () => {
    wrapper.setProps({ text: 'b' });
    expect(wrapper.contains(<div className="text">b</div>)).toBe(true);
    wrapper.setProps({ text: null });
    expect(wrapper.contains(<div className="text">b</div>)).toBe(false);
  });
  it('renders the note if the entry has a note', () => {
    wrapper.setProps({ note: 'b' });
    expect(wrapper.contains(<div className="text">b</div>)).toBe(true);
    wrapper.setProps({ note: null });
    expect(wrapper.contains(<div className="text">b</div>)).toBe(false);
  });
  it('renders the outcome if the entry has an outcome', () => {
    wrapper.setProps({ outcome: 'b' });
    expect(
      wrapper.contains(<span className="keyword">Call outcome: </span>)
    ).toBe(true);
    wrapper.setProps({ outcome: null });
    expect(
      wrapper.contains(<span className="keyword">Call outcome: </span>)
    ).toBe(false);
  });
  describe('TIMELINE_MESSAGES Object', () => {
    it('returns some functions', () => {
      expect(() => TIMELINE_MESSAGES.CREATION({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.NOTE({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.CALL({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.EMAIL({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.MEETING({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.QUOTE({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_FORWARD({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.STATUS_CHANGE_BACKWARD({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.JOIN_TEAM({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.LEAVE_TEAM({})).not.toThrow();
    });
  });
});
