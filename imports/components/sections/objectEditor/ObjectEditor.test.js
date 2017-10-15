import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ObjectEditor from './ObjectEditor';

describe('ObjectEditor Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<ObjectEditor {...props} />);
  });
  it('renders without error', () => {});
});
