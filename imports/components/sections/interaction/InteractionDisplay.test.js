import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import InteractionDisplay from './InteractionDisplay';

describe('InteractionDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InteractionDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('displays an input row if hasTime or hasOutcome', () => {
    wrapper.setProps({ hasTime: false, hasOutcome: false });
    expect(wrapper.find('.input-row').exists()).toBe(false);
    wrapper.setProps({ hasTime: true, hasOutcome: false });
    expect(wrapper.find('.input-row').exists()).toBe(true);
    wrapper.setProps({ hasTime: false, hasOutcome: true });
    expect(wrapper.find('.input-row').exists()).toBe(true);
  });
  it('displays time if hasTime', () => {
    wrapper.setProps({ hasTime: false });
    expect(wrapper.find('DateField').exists()).toBe(false);
    wrapper.setProps({ hasTime: true });
    expect(wrapper.find('DateField').exists()).toBe(true);
  });
  it('displays outcome if hasOutcome', () => {
    wrapper.setProps({ hasOutcome: false });
    expect(wrapper.find('OptionField').exists()).toBe(false);
    wrapper.setProps({ hasOutcome: true });
    expect(wrapper.find('OptionField').exists()).toBe(true);
  });
  it('calls setText on change of textarea', () => {
    const setText = jest.fn();
    wrapper.setProps({ setText });
    expect(setText).toHaveBeenCalledTimes(0);
    wrapper.find('textarea').simulate('change', { target: { value: 'a' } });
    expect(setText).toHaveBeenCalledTimes(1);
  });
  it('logs the interaction on confirm', () => {
    const interaction = { text: 'a', time: 'b', outcome: 'c' };
    const logInteraction = jest.fn();
    wrapper.setProps({ ...interaction, logInteraction });
    expect(logInteraction).toHaveBeenCalledTimes(0);
    wrapper
      .find('InteractionButtons')
      .props()
      .onConfirm();
    expect(logInteraction).toHaveBeenCalledTimes(1);
  });
});
