import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AvatarField from './AvatarField';

describe('AvatarField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<AvatarField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('renders a Dropzone wrapping an Image if it is editable', () => {
    wrapper.setProps({ editable: true });
    expect(wrapper.name()).toBe('Dropzone');
    expect(wrapper.children().name()).toBe('Image');
  });
  it('renders an Image otherwise', () => {
    wrapper.setProps({ editable: false });
    expect(wrapper.name()).toBe('Image');
  });
});
