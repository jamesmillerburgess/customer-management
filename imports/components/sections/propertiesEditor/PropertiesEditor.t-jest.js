import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PropertiesEditor from './PropertiesEditor';

describe('PropertiesEditor Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<PropertiesEditor {...props} />);
  });
  it('renders without error', () => {});
});
