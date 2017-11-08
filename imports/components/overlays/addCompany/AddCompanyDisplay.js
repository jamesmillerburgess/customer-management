import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Marker } from 'react-google-maps';

import AddContactDisplay from '../addContact/AddContactDisplay';
import AvatarField from '../../fields/avatarField/AvatarField';
import PlaceField from '../../fields/placeField/PlaceField';
import MapField from '../../fields/mapField/MapField';
import Field from '../../fields/field/Field';

const AddCompanyDisplay = props => (
  <div>
    <div className="tab-group">
      <button
        type="button"
        className={`tab ${props.entryMode === 'GOOGLE_PLACES' ? 'active' : ''}`}
        onClick={() => props.setEntryMode('GOOGLE_PLACES')}
      >
        <AvatarField publicId="maps_64dp_pk9aph" />
        <Translate className="label" value="companies.googlePlaces" />
      </button>
      <button
        type="button"
        className={`tab ${props.entryMode === 'MANUAL_ENTRY' ? 'active' : ''}`}
        onClick={() => props.setEntryMode('MANUAL_ENTRY')}
      >
        <span className="fa fa-fw fa-pencil-square-o" />
        <Translate className="label" value="companies.manualEntry" />
      </button>
    </div>
    {props.entryMode === 'GOOGLE_PLACES' && (
      <div className="overlay-content">
        <div className="input-group place-search-result">
          <MapField
            defaultCenter={{ lat: props.lat, lng: props.lng }}
            markers={[{ lat: props.lat, lng: props.lng }]}
          />
          <div className="input-label">
            <Translate value="companies.fields.searchGooglePlaces" />
          </div>
          <PlaceField value={props.place} onChange={props.setPlace} />
        </div>
        {props.fields.map(field => (
          <div className="input-group" key={field.name}>
            <div className="input-label">
              <Translate value={field.label} />
            </div>
            <Field
              {...field}
              onChange={val => props.setProp(field.name, val)}
            />
          </div>
        ))}
      </div>
    )}
    {props.entryMode === 'MANUAL_ENTRY' && (
      <AddContactDisplay fields={props.fields} setProp={props.setProp} />
    )}
  </div>
);

export default AddCompanyDisplay;
