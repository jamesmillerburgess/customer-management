import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import OpportunityList from './OpportunityList';
import OpportunityCard from './OpportunityCard';
import { STATUS_VALUES } from '../../fields/statusField/StatusField';

const statuses = [
  { title: 'APPOINTMENT SCHEDULED', color: '#fb9d95' },
  { title: 'QUALIFIED TO BUY', color: '#ef91a4' },
  { title: 'PRESENTATION SCHEDULED', color: '#da89b2' },
  { title: 'DECISION MAKER BOUGHT-IN', color: '#da89b2' },
  { title: 'CONTRACT SENT', color: '#aa85c0' },
  { title: 'CLOSED WON', color: '#9784c2' },
  { title: 'CLOSED LOST', color: '#516f90' },
];

class Board extends React.Component {
  render() {
    return (
      <div className="opportunities-board">
        {statuses.map((status, i) => (
          <div className="status-group" key={status.title}>
            <div className="header">
              <div className="header-text">
                <div className="title">{status.title}</div>
                <div className="count">
                  {
                    this.props.cards.filter(
                      card => card.status === STATUS_VALUES[i]
                    ).length
                  }
                </div>
              </div>
              <div className="probability-bar">
                {statuses.map(({ color }, j) => (
                  <div
                    key={`${i}${j}`}
                    className="bar"
                    style={{
                      backgroundColor:
                        j <= i && (i !== 6 || (i === 6 && j === 6))
                          ? color
                          : '',
                    }}
                  />
                ))}
              </div>
            </div>
            <OpportunityList status={STATUS_VALUES[i]}>
              {this.props.cards
                .filter(card => card.status === STATUS_VALUES[i])
                .map(card => <OpportunityCard {...card} key={card._id} />)}
            </OpportunityList>
            <div className="footer">
              Total: ${this.props.cards
                .filter(card => card.status === STATUS_VALUES[i])
                .reduce((prev, card) => prev + +card.amount, 0)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
