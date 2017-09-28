import React from 'react';
import { createSelector } from 'reselect';

import OpportunityBoard from './OpportunityBoard';
import { STATUS_VALUES } from '../../fields/statusField/StatusField';

const cardsSelector = props => props.cards;

const cardListsSelector = createSelector(cardsSelector, cards =>
  cards.reduce(
    (prev, card) => {
      prev[STATUS_VALUES.indexOf(card.status)].push(card);
      return prev;
    },
    [[], [], [], [], [], [], []]
  )
);

const listTotalsSelector = createSelector(cardListsSelector, cardLists =>
  cardLists.map(cardList =>
    cardList.reduce((prev, card) => prev + +card.amount, 0)
  )
);

const probabilityColors = [
  [true],
  [true, true],
  [true, true, true],
  [true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true, true],
  [false, false, false, false, false, false, true],
];

const OpportunityBoardConnect = props => (
  <OpportunityBoard
    {...props}
    cardLists={cardListsSelector(props)}
    listTotals={listTotalsSelector(props)}
    probabilityColors={probabilityColors}
  />
);

export default OpportunityBoardConnect;
