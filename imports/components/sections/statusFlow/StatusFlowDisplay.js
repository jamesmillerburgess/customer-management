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
        <div className="icon fa fa-fw fa-circle-thin" />
      </button>
    ))}
  </div>
);

export default StatusFlowDisplay;
