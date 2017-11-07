import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Marker } from 'react-google-maps';

import PlaceField from '../../fields/placeField/PlaceField';
import MapField from '../../fields/mapField/MapField';
import Field from '../../fields/field/Field';

const AddCompanyDisplay = props => (
  <div>
    <div className="input-group">
      <div className="input-label">
        <Translate value="companies.fields.place" />
      </div>
      <PlaceField value={props.place} onChange={props.setPlace} />
      {props.lat && (
        <MapField defaultCenter={{ lat: props.lat, lng: props.lng }}>
          <Marker position={{ lat: props.lat, lng: props.lng }} />
        </MapField>
      )}
    </div>
    {props.fields.map(field => (
      <div className="input-group" key={field.name}>
        <div className="input-label">
          <Translate value={field.label} />
        </div>
        <Field {...field} onChange={val => props.setProp(field.name, val)} />
      </div>
    ))}
  </div>
);

export default AddCompanyDisplay;
