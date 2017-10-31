import React from 'react';
import { Translate } from 'react-redux-i18n';

const StatusFlowDisplay = props => (
  <div className="status-flow">
    {props.statuses.map((status, index) => {
      const activeClass = status.value === props.status ? 'active' : '';
      let leftColor = '';
      let iconColor = '';
      let iconClass = 'fa-circle-thin';
      let rightColor = '';
      if (index <= props.statusIndex) {
        leftColor = status.color;
        iconColor = status.color;
        iconClass = 'fa-check-circle';
      }
      if (index < props.statusIndex) {
        rightColor = status.color;
      }
      return (
        <button
          className={`status-node ${activeClass}`}
          key={status.value}
          onClick={() => props.updateStatus(status.value)}
        >
          <div className="status-label">
            <Translate value={`opportunityStatuses.${status.value}`} />
          </div>
          <div className="icons">
            <div
              className="bar left"
              style={{
                backgroundColor: index === 0 ? 'transparent' : leftColor,
              }}
            />
            <div
              className={`icon fa fa-fw ${iconClass}`}
              style={{ color: iconColor }}
            />
            <div
              className="bar right"
              style={{
                backgroundColor:
                  index === props.statuses.length - 1
                    ? 'transparent'
                    : rightColor,
              }}
            />
          </div>
          <div className="move-to-label">
            <span className="fa fa-fw fa-arrow-right" />
            <Translate value={`opportunityStatuses.${status.value}`} />
          </div>
        </button>
      );
    })}
  </div>
);

export default StatusFlowDisplay;
