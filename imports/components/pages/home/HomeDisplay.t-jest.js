import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HomeDisplay from './HomeDisplay';
import { LOGIN, REGISTER } from './HomeConstants';

describe('HomeDisplay', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    props.setUsername = jest.fn();
    props.setPassword = jest.fn();
    props.setPasswordAgain = jest.fn();
    props.tryLogin = jest.fn();
    props.tryRegister = jest.fn();
    props.mode = null;
    wrapper = shallow(<HomeDisplay {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('dispatches on change of username value', () => {
    wrapper.find('#username').simulate('change', { target: { value: 'a' } });
    expect(props.setUsername).toHaveBeenCalled();
  });
  it('dispatches on change of password value', () => {
    wrapper.find('#password').simulate('change', { target: { value: 'a' } });
    expect(props.setPassword).toHaveBeenCalled();
  });
  it('only displays password-again if mode is REGISTER', () => {
    wrapper.setProps({ mode: null });
    expect(wrapper.find('#password-again').length).toBe(0);
    wrapper.setProps({ mode: REGISTER });
    expect(wrapper.find('#password-again').length).toBe(1);
  });
  it('dispatches on change of password-again value', () => {
    wrapper.setProps({ mode: REGISTER });
    wrapper
      .find('#password-again')
      .simulate('change', { target: { value: 'a' } });
    expect(props.setPasswordAgain).toHaveBeenCalled();
  });
  it('prevents default on submit', () => {
    const e = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
  it('calls tryLogin on submit if mode is LOGIN', () => {
    const e = { preventDefault: jest.fn() };
    wrapper.setProps({ mode: LOGIN });
    wrapper.find('form').simulate('submit', e);
    expect(props.tryLogin).toHaveBeenCalled();
  });
  it('calls tryRegister on submit if mode is REGISTER', () => {
    const e = { preventDefault: jest.fn() };
    wrapper.setProps({ mode: REGISTER });
    wrapper.find('form').simulate('submit', e);
    expect(props.tryRegister).toHaveBeenCalled();
  });
});
