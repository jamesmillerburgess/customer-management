import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TextField from '../fields/textField/TextField';

import AddObjectDisplay from './AddObjectDisplay';

describe('AddObjectDisplay', () => {
  let wrapper;
  const props = {
    fields: [
      { name: 'name', label: 'Name', component: TextField, default: '' },
    ],
  };
  beforeEach(() => {
    wrapper = shallow(<AddObjectDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls create and prevents default on submit', () => {
    const create = jest.fn();
    const preventDefault = jest.fn();
    wrapper.setProps({ create });
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(create).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
  it('sets the class to show if show is true', () => {
    wrapper.setProps({ show: true });
    expect(wrapper.hasClass('show')).toBe(true);
    wrapper.setProps({ show: false });
    expect(wrapper.hasClass('show')).toBe(false);
  });
  it('renders overlayContent if open', () => {
    wrapper.setProps({ open: true, OverlayContent: () => <div /> });
    expect(wrapper.find('OverlayContent').exists()).toBe(true);
    wrapper.setProps({ open: false });
    expect(wrapper.find('OverlayContent').exists()).toBe(false);
  });
});
