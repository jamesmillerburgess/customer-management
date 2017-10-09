import React from 'react';
import { shallow } from 'enzyme';

import InteractionButtons from './InteractionButtons';

describe('InteractionButtons Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<InteractionButtons {...props} />, options);
  });
  it('renders without error', () => {});
  it('switches the styles based on isWriting', () => {
    wrapper.setProps({ isWriting: false });
    expect(wrapper.find('.button-group').hasClass('expandable')).toBe(true);
    expect(wrapper.find('.button-group').hasClass('expanded')).toBe(false);
    wrapper.setProps({ isWriting: true });
    expect(wrapper.find('.button-group').hasClass('expanded')).toBe(true);
    expect(wrapper.find('.button-group').hasClass('expandable')).toBe(false);
  });
});
