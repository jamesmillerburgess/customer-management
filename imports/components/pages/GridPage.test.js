import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import GridPage from './GridPage';

describe('GridPage', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<GridPage />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
