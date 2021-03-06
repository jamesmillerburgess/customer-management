import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Panel from './Panel';

describe('Panel', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Panel />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
