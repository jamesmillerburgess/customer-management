import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BasicInfoDisplay from './BasicInfoDisplay';

describe('BasicInfoDisplay Component', () => {
  let wrapper;
  const props = { team: {} };
  beforeEach(() => {
    wrapper = shallow(<BasicInfoDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('calls preventDefault and saves the profile on submit', () => {
    const saveProfile = jest.fn();
    const e = { preventDefault: jest.fn() };
    wrapper.setProps({ saveProfile });
    expect(e.preventDefault).toHaveBeenCalledTimes(0);
    expect(saveProfile).toHaveBeenCalledTimes(0);
    wrapper.simulate('submit', e);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(saveProfile).toHaveBeenCalledTimes(1);
  });
  it('passes selector functions to value and option renderer', () => {
    expect(
      wrapper
        .find('OptionField')
        .props()
        .valueRenderer({ label: 'a' })
    ).toBe('a');
    expect(
      wrapper
        .find('OptionField')
        .props()
        .optionRenderer({ label: 'a' })
    ).toBe('a');
  });
});
