import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityBoardConnect, {
  cardListsSelector,
  listTotalsSelector,
  STATUS_VALUES,
} from './OpportunityBoardConnect';

describe('OpportunityBoardConnect Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpportunityBoardConnect />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
describe('cardListsSelector Function', () => {
  it('puts the cards into lists by status', () => {
    const props = {
      cards: [{ status: STATUS_VALUES[0] }, { status: STATUS_VALUES[1] }],
    };
    const cardLists = cardListsSelector(props);
    expect(cardLists[0].length).toBe(1);
    expect(cardLists[1].length).toBe(1);
    expect(cardLists[2].length).toBe(0);
    expect(cardLists[3].length).toBe(0);
    expect(cardLists[4].length).toBe(0);
    expect(cardLists[5].length).toBe(0);
    expect(cardLists[6].length).toBe(0);
  });
});
describe('listTotalsSelector', () => {
  it('totals the amounts by status', () => {
    const props = {
      cards: [
        { status: STATUS_VALUES[0], amount: 1 },
        { status: STATUS_VALUES[1], amount: 2 },
      ],
    };
    const listTotals = listTotalsSelector(props);
    expect(listTotals[0]).toBe(1);
    expect(listTotals[1]).toBe(2);
    expect(listTotals[2]).toBe(0);
    expect(listTotals[3]).toBe(0);
    expect(listTotals[4]).toBe(0);
    expect(listTotals[5]).toBe(0);
    expect(listTotals[6]).toBe(0);
  });
});
