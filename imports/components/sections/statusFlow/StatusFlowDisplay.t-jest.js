import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
    const circles = wrapper.find('.icon');
    expect(circles.at(0).props().style.color).toBe('red');
    expect(circles.at(1).props().style.color).toBe('blue');
    expect(circles.at(2).props().style.color).toBe('');
    const checks = wrapper.find('.fa-check-circle');
    expect(checks.length).toBe(2);
    expect(checks.at(0).props().style.color).toBe('red');
    expect(checks.at(1).props().style.color).toBe('blue');
    const lefts = wrapper.find('.left');
    expect(lefts.at(0).props().style.backgroundColor).toBe('transparent');
    expect(lefts.at(1).props().style.backgroundColor).toBe('blue');
    expect(lefts.at(2).props().style.backgroundColor).toBe('');
    const rights = wrapper.find('.right');
    expect(rights.at(0).props().style.backgroundColor).toBe('red');
    expect(rights.at(1).props().style.backgroundColor).toBe('');
    expect(rights.at(2).props().style.backgroundColor).toBe('transparent');
  });
});
