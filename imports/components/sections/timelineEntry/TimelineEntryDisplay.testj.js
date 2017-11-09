import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TimelineEntryDisplay, {
  TIMELINE_MESSAGES,
  STATUS_VALUES,
} from './TimelineEntryDisplay';

describe('TimelineEntryDisplay Component', () => {
  let wrapper;
  let props = { type: 'CREATION', time: '1' };
  beforeEach(() => {
    wrapper = shallow(<TimelineEntryDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('uses time if available and falls back to timestamp otherwise', () => {
    wrapper.setProps({ time: null, timestamp: 2 });
    expect(wrapper.find('.timestamp Localize').props().value).toBe(2);
    wrapper.setProps({ time: 1, timestamp: 2 });
    expect(wrapper.find('.timestamp Localize').props().value).toBe(1);
  });
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
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).toBe('timeline.callOutcome');
    wrapper.setProps({ outcome: null });
    expect(
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).not.toBe('timeline.callOutcome');
  });
  it('renders the quoteNumber if the entry has a quoteNumber', () => {
    wrapper.setProps({ quoteNumber: 'b' });
    expect(
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).toBe('timeline.quoteNumber');
    wrapper.setProps({ quoteNumber: null });
    expect(
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).not.toBe('timeline.quoteNumber');
  });
  it('renders the newStatus if the entry has a to', () => {
    wrapper.setProps({ to: 'b' });
    expect(
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).toBe('timeline.newStatus');
    wrapper.setProps({ to: null });
    expect(
      wrapper
        .find('.outcome Translate')
        .at(0)
        .props().value
    ).not.toBe('timeline.newStatus');
  });
  describe('TIMELINE_MESSAGES Object', () => {
    it('returns some functions', () => {
      expect(() => TIMELINE_MESSAGES.CREATION({})).not.toThrow();
      expect(() => TIMELINE_MESSAGES.ARCHIVAL({})).not.toThrow();
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
