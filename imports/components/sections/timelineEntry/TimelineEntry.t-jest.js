import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TimelineEntry from './TimelineEntry';

describe('TimelineEntry Component', () => {
  let wrapper;
  const props = { fields: [] };
  beforeEach(() => {
    wrapper = shallow(<TimelineEntry {...props} />);
  });
  it('renders without error', () => {});
});
