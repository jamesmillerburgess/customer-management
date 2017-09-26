import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import OpportunityList from './OpportunityList';
import OpportunityCard from './OpportunityCard';

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
    console.log(this.props);
    return (
      <div className="opportunities-board">
        {statuses.map((status, i) => (
          <div className="status-group" key={status.title}>
            <div className="header">
              <div className="header-text">
                <div className="title">{status.title}</div>
                <div className="count">1</div>
              </div>
              <div className="probability-bar">
                {statuses.map(({ color }, j) => (
                  <div
                    key={`${i}${j}`}
                    className="bar"
                    style={{ backgroundColor: j <= i ? color : '' }}
                  />
                ))}
              </div>
            </div>
            <OpportunityList>
              <OpportunityCard />
            </OpportunityList>
            <div className="footer">Total: $0</div>
          </div>
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
