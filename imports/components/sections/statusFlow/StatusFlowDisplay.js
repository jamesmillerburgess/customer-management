import React from 'react';

const StatusFlowDisplay = props => (
  <div className="status-flow">
    {props.statuses.map((status, index) => (
      <button
        className={`status-node ${status.value === props.status
          ? 'active'
          : ''}`}
        key={status.value}
        onClick={() => props.updateStatus(status.value)}
      >
        <div className="status-label">{status.label}</div>
        <div className="move-to-label">Move to: {status.label}</div>
        <div className="icons">
          <div
            className={`icon fa fa-fw ${index <= props.statusIndex
              ? 'fa-check-circle'
              : 'fa-circle-thin'}`}
            style={{ color: index <= props.statusIndex ? status.color : '' }}
          />
        </div>
        <div
          className="status-node-connector"
          style={{
            background:
              index < props.statusIndex
                ? `linear-gradient(${status.color}, ${props.statuses[index + 1]
                    .color})`
                : '',
            opacity: index === props.statuses.length - 1 ? '0' : '1',
          }}
        />
      </button>
    ))}
  </div>
);

export default StatusFlowDisplay;
