import React from 'react';
import { createSelector } from 'reselect';

import OpportunityBoard from './OpportunityBoard';

const APPOINTMENT_SCHEDULED = 'APPOINTMENT_SCHEDULED';
const QUALIFIED_TO_BUY = 'QUALIFIED_TO_BUY';
const PRESENTATION_SCHEDULED = 'PRESENTATION_SCHEDULED';
const DECISION_MAKER_BOUGHT_IN = 'DECISION_MAKER_BOUGHT_IN';
const CONTRACT_SENT = 'CONTRACT_SENT';
const CLOSED_WON = 'CLOSED_WON';
const CLOSED_LOST = 'CLOSED_LOST';

export const STATUS_VALUES = [
  APPOINTMENT_SCHEDULED,
  QUALIFIED_TO_BUY,
  PRESENTATION_SCHEDULED,
  DECISION_MAKER_BOUGHT_IN,
  CONTRACT_SENT,
  CLOSED_WON,
  CLOSED_LOST,
];

const cardsSelector = props => props.cards;

export const cardListsSelector = createSelector(cardsSelector, cards =>
  cards.reduce(
    (prev, card) => {
      prev[STATUS_VALUES.indexOf(card.status)].push(card);
      return prev;
    },
    [[], [], [], [], [], [], []]
  )
);

export const listTotalsSelector = createSelector(cardListsSelector, cardLists =>
  cardLists.map(cardList =>
    cardList.reduce((prev, card) => prev + +card.amount, 0)
  )
);

export const probabilityColors = [
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

OpportunityBoardConnect.defaultProps = { cards: [] };

export default OpportunityBoardConnect;
