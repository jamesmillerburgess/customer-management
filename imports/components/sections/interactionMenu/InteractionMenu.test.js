import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import InteractionMenu from './InteractionMenu';

describe('InteractionMenu Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<InteractionMenu {...props} />);
  });
  it('renders without error', () => {});
});
