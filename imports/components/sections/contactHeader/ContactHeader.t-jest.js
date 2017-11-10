import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ContactHeader from './ContactHeader';

describe('ContactHeader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactHeader />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders the company name if available', () => {
    wrapper.setProps({ object: { company: { name: 'hello' } } });
    expect(
      wrapper
        .find('.label')
        .at(0)
        .text()
    ).toBe('hello');
  });
});
