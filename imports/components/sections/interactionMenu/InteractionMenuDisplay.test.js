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
    wrapper.setProps({
      interactions: ['NEW_NOTE', 'LOG_CALL', 'LOG_EMAIL', 'LOG_MEETING'],
      setActiveInteraction,
    });
    expect(setActiveInteraction).toHaveBeenCalledTimes(0);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(setActiveInteraction).toHaveBeenCalledTimes(1);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(setActiveInteraction).toHaveBeenCalledTimes(2);
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(setActiveInteraction).toHaveBeenCalledTimes(3);
    wrapper
      .find('button')
      .at(3)
      .simulate('click');
    expect(setActiveInteraction).toHaveBeenCalledTimes(4);
  });
  it('ignores invalid interactions', () => {
    wrapper.setProps({ interactions: ['a', 'b'] });
    expect(wrapper.find('button').length).toBe(0);
  });
  it('sets the active class when the interaction matches', () => {
    wrapper.setProps({
      interactions: ['NEW_NOTE', 'LOG_CALL'],
      activeInteraction: 'LOG_CALL',
    });
    expect(
      wrapper
        .find('button')
        .at(1)
        .hasClass('active')
    ).toBe(true);
  });
});
