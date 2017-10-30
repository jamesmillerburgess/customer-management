import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Translate } from 'react-redux-i18n';

import OpportunityList from './OpportunityList';
import OpportunityCard from './OpportunityCard';

const statuses = [
  { title: 'APPOINTMENT SCHEDULED', color: '#fb9d95' },
  { title: 'QUALIFIED TO BUY', color: '#ef91a4' },
  { title: 'PRESENTATION SCHEDULED', color: '#da89b2' },
  { title: 'DECISION MAKER BOUGHT-IN', color: '#bc85bd' },
  { title: 'CONTRACT SENT', color: '#aa85c0' },
  { title: 'CLOSED WON', color: '#9784c2' },
  { title: 'CLOSED LOST', color: '#516f90' },
];

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

class OpportunityBoard extends React.Component {
  render() {
    return (
      <div className="opportunities-board">
        {statuses.map((status, i) => (
          <div className="status-group" key={status.title}>
            <div className="header">
              <div className="header-text">
                <div className="title">
                  <Translate
                    value={`opportunityStatuses.${STATUS_VALUES[i]}`}
                  />
                </div>
                <div className="count">{this.props.cardLists[i].length}</div>
              </div>
              <div className="probability-bar">
                {statuses.map(({ color }, j) => (
                  <div
                    key={`${i}${j}`}
                    className="bar"
                    style={{
                      backgroundColor: this.props.probabilityColors[i][j]
                        ? color
                        : '',
                    }}
                  />
                ))}
              </div>
            </div>
            <OpportunityList
              status={
                <Translate value={`opportunityStatuses.${STATUS_VALUES[i]}`} />
              }
            >
              {this.props.cardLists[i].map(card => (
                <OpportunityCard {...card} key={card._id} />
              ))}
            </OpportunityList>
            <div className="footer">
              <Translate value="opportunities.total" />: ${this.props.listTotals[i]}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(OpportunityBoard);
