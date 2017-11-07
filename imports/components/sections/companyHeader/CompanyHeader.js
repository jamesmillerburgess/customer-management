import React from 'react';
import { Translate } from 'react-redux-i18n';
import _ from 'lodash';

import AvatarField from '../../fields/avatarField/AvatarField';
import MapField from '../../fields/mapField/MapField';
import PlaceField from '../../fields/placeField/PlaceField';

const CompanyHeader = props => (
  <div className="panel sidebar-header">
    <div className="avatar-group">
      <div>
        <div className="title name">{props.object.name}</div>
        <div className="label lifecycle-stage">
          <Translate
            value={`companyLifecycleStages.${props.object.lifecycleStage}`}
          />
        </div>
        <div className="label status">
          <Translate value={`companyStatuses.${props.object.status}`} />
        </div>
      </div>
    </div>
    <MapField
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      markers={[{ lat: props.lat, lng: props.lng }]}
    />
    <div className="label address">{props.object.address}</div>
  </div>
);

export default CompanyHeader;
