import React from 'react';
import { Translate } from 'react-redux-i18n';

import AvatarField from '../../fields/avatarField/AvatarField';

const ContactHeader = props => (
  <div className="panel sidebar-header">
    <div className="header-top">
      <div>
        <div className="title name">{props.object.name}</div>
        <div className="label lifecycle-stage">
          {(props.object.company || {}).name}
        </div>
        <div className="label status">{props.object.position}</div>
      </div>
      <AvatarField
        className="avatar"
        publicId={props.avatarURL}
        editable
        onDrop={props.onDrop}
      />
    </div>
  </div>
);

ContactHeader.defaultProps = {
  object: {},
};

export default ContactHeader;
