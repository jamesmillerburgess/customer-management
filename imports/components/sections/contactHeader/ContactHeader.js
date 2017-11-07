import React from 'react';
import { Translate } from 'react-redux-i18n';
import _ from 'lodash';

import AvatarField from '../../fields/avatarField/AvatarField';
import MapField from '../../fields/mapField/MapField';
import PlaceField from '../../fields/placeField/PlaceField';

const ContactHeader = props => (
  <div className="panel sidebar-header">
    <div className="avatar-group">
      <div>
        <div className="title name">{props.object.name}</div>
        <div className="label lifecycle-stage">
          {(props.object.company || {}).name}
        </div>
        <div className="label status">{props.object.position}</div>
      </div>
    </div>
  </div>
);

export default ContactHeader;
