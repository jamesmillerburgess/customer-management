import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityBoard from './OpportunityBoard';

describe('OpportunityBoard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpportunityBoard />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {
    const cardLists = [[{ _id: 'a' }], [], [], [], [], [], []];
    const probabilityColors = [[true], [], [], [], [], [], []];
    const listTotals = [0, 1, 2, 3, 4, 5, 6];
    wrapper.setProps({ cardLists, probabilityColors, listTotals });
    wrapper.shallow();
  });
});
