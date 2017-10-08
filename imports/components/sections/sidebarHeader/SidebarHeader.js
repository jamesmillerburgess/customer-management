import React from 'react';

const SidebarHeader = props => (
  <div className="panel sidebar-header">
    <img className="avatar" src={props.avatarPath} />
    <div className="title">{props.name}</div>
  </div>
);

export default SidebarHeader;
