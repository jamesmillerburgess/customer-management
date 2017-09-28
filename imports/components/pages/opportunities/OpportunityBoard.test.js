import React from 'react';
import { shallow } from 'enzyme';

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
