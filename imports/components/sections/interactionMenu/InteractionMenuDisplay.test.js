import React from 'react';
import { shallow } from 'enzyme';

import InteractionMenuDisplay from './InteractionMenuDisplay';

describe('InteractionMenuDisplay Component', () => {
  let wrapper;
  const props = { interactions: [] };
  beforeEach(() => {
    wrapper = shallow(<InteractionMenuDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders the various interactions from the props', () => {
    expect(wrapper.find('.interaction-item').length).toBe(0);
    wrapper.setProps({
      interactions: ['NEW_NOTE', 'LOG_CALL', 'LOG_EMAIL', 'LOG_MEETING'],
    });
    expect(wrapper.find('.interaction-item').length).toBe(4);
  });
  it('calls setActiveInteraction on click of an interaction', () => {
    const setActiveInteraction = jest.fn();
    wrapper.setProps({ interactions: ['NEW_NOTE'], setActiveInteraction });
    expect(setActiveInteraction).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click');
    expect(setActiveInteraction).toHaveBeenCalledTimes(1);
  });
});
