import React from 'react';
import './Panel.scss';

const Panel = props => (
  <div className="panel-inner">
    <div className="panel-header">
      <div className="panel-title">{props.title}</div>
      <div className="panel-menu">Actions</div>
    </div>
    <div className="panel-body">{props.children}</div>
  </div>
);

export default Panel;
