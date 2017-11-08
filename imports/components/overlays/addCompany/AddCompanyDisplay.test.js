import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AddCompanyDisplay from './AddCompanyDisplay';

describe('AddCompanyDisplay', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<AddCompanyDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls setEntryMode when the mode buttons are clicked', () => {
    const setEntryMode = jest.fn();
    wrapper.setProps({ setEntryMode });
    wrapper
      .find('.tab-group button')
      .at(0)
      .simulate('click');
    expect(setEntryMode).toHaveBeenLastCalledWith('GOOGLE_PLACES');
    wrapper
      .find('.tab-group button')
      .at(1)
      .simulate('click');
    expect(setEntryMode).toHaveBeenLastCalledWith('MANUAL_ENTRY');
  });
  it('maps the fields to input groups', () => {
    const setProp = jest.fn();
    wrapper.setProps({
      fields: [{ name: 'a', label: 'b' }],
      setProp,
      entryMode: 'GOOGLE_PLACES',
    });
    wrapper
      .find('.overlay-content .input-group Field')
      .props()
      .onChange('b');
    expect(setProp).toHaveBeenLastCalledWith('a', 'b');
    wrapper.setProps({
      entryMode: 'MANUAL_ENTRY',
    });
    expect(wrapper.find('AddContactDisplay').exists()).toBe(true);
  });
});
