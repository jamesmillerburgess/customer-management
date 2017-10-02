import React from 'react';
import { shallow } from 'enzyme';

import StatusFlowDisplay from './StatusFlowDisplay';

describe('StatusFlowDisplay Component', () => {
  let wrapper;
  const props = { statuses: [{ value: 'a' }] };
  beforeEach(() => {
    wrapper = shallow(<StatusFlowDisplay {...props} />);
  });
  it('renders without error', () => {});
  it('calls updateStatus on click of node', () => {
    const updateStatus = jest.fn();
    wrapper.setProps({ updateStatus });
    expect(updateStatus).toHaveBeenCalledTimes(0);
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(updateStatus).toHaveBeenCalledTimes(1);
  });
  it('sets the node class to active if it matches the status', () => {
    wrapper.setProps({
      status: 'a',
      statuses: [{ value: 'a' }, { value: 'b' }],
    });
    const nodes = wrapper.find('.status-node');
    expect(nodes.at(0).hasClass('active')).toBe(true);
    expect(nodes.at(1).hasClass('active')).toBe(false);
  });
  it('applies colors to any nodes before or equal to the statusIndex', () => {
    wrapper.setProps({
      statusIndex: 1,
      statuses: [
        { value: 'a', color: 'red' },
        { value: 'b', color: 'blue' },
        { value: 'c', color: 'green' },
      ],
    });
    const circles = wrapper.find('.fa-circle-thin');
    expect(circles.at(0).props().style.color).toBe('red');
    expect(circles.at(1).props().style.color).toBe('blue');
    expect(circles.at(2).props().style.color).toBe('');
    const checks = wrapper.find('.fa-check');
    expect(checks.length).toBe(2);
    expect(checks.at(0).props().style.color).toBe('red');
    expect(checks.at(1).props().style.color).toBe('blue');
    const connectors = wrapper.find('.status-node-connector');
    expect(connectors.at(0).props().style.background).not.toBe('');
    expect(connectors.at(1).props().style.background).toBe('');
    expect(connectors.at(2).props().style.background).toBe('');
  });
  it('hides only the last connector', () => {
    wrapper.setProps({
      statusIndex: 1,
      statuses: [
        { value: 'a', color: 'red' },
        { value: 'b', color: 'blue' },
        { value: 'c', color: 'green' },
      ],
    });
    const connectors = wrapper.find('.status-node-connector');
    expect(connectors.at(0).props().style.opacity).toBe('1');
    expect(connectors.at(1).props().style.opacity).toBe('1');
    expect(connectors.at(2).props().style.opacity).toBe('0');
  });
});
