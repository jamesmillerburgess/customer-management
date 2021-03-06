import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Timeline, { sort } from './Timeline';

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
        .find('CSSTransitionGroup')
        .children()
        .at(0)
        .props().id
    ).toBe('a');
  });
  it('uses id or _id as the key on TimelineEntries', () => {
    wrapper.setProps({
      timeline: [{ id: 'a', type: 'CREATION' }, { _id: 'b', type: 'CREATION' }],
    });
    expect(
      wrapper
        .find('CSSTransitionGroup')
        .children()
        .at(0)
        .props().id
    ).toBe('a');
    expect(
      wrapper
        .find('CSSTransitionGroup')
        .children()
        .at(1)
        .props()._id
    ).toBe('b');
  });
  describe('sort Function', () => {
    it('sorts based on time', () => {
      const items = [{ time: 1 }, { time: 2 }];
      expect(items.sort(sort)[0].time).toBe(2);
      expect(items.sort(sort)[1].time).toBe(1);
    });
    it('falls back to timestamp if no time is present', () => {
      const items = [{ timestamp: 1 }, { timestamp: 2 }];
      expect(items.sort(sort)[0].timestamp).toBe(2);
      expect(items.sort(sort)[1].timestamp).toBe(1);
    });
  });
});
