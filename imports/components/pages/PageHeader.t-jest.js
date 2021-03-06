import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<PageHeader />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('hides buttons if set', () => {
    wrapper.setProps({ hideButtons: false });
    expect(wrapper.find('.button-group').length).toBe(1);
    wrapper.setProps({ hideButtons: true });
    expect(wrapper.find('.button-group').length).toBe(0);
  });
});
