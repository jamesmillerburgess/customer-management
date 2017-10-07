import React from 'react';
import { shallow } from 'enzyme';

import ObjectEditorDisplay from './ObjectEditorDisplay';

describe('ObjectEditorDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ObjectEditorDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
