import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import StatusFlow from './StatusFlow';

describe('StatusFlow Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<StatusFlow {...props} />);
  });
  it('renders without error', () => {});
});
