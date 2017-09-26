import React from 'react';
import './OpportunitiesDisplay.scss';
import PageHeader from '../PageHeader';

const headerProps = {
  title: 'Opportunities',
  search: 'Search for an opportunity',
  add: 'Add opportunity',
};

const statuses = [
  { title: 'APPOINTMENT SCHEDULED', color: '#fb9d95' },
  { title: 'QUALIFIED TO BUY', color: '#ef91a4' },
  { title: 'PRESENTATION SCHEDULED', color: '#da89b2' },
  { title: 'DECISION MAKER BOUGHT-IN', color: '#da89b2' },
  { title: 'CONTRACT SENT', color: '#aa85c0' },
  { title: 'CLOSED WON', color: '#9784c2' },
  { title: 'CLOSED LOST', color: '#516f90' },
];

const OpportunitiesDisplay = props => (
  <div>
    <PageHeader
      {...headerProps}
      onClickAdd={() => props.setIsOverlayOpen(true)}
    />
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
          <div className="list">
            <div className="panel">My new deal</div>
          </div>
          <div className="footer">Total: $0</div>
        </div>
      ))}
    </div>
  </div>
);

export default OpportunitiesDisplay;
