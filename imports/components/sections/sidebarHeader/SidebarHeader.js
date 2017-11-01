import React from 'react';
import AvatarField from '../../fields/avatarField/AvatarField';

const SidebarHeader = props => (
  <div className="panel sidebar-header">
    <AvatarField
      className="avatar"
      editable
      onDrop={props.onDrop}
      width="64"
      height="64"
      publicId={props.avatarURL}
    />
    <div className="title">{props.name}</div>
  </div>
);

export default SidebarHeader;
