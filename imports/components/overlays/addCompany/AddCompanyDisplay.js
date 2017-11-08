import React from 'react';
import { Translate } from 'react-redux-i18n';

import FieldList from '../../sections/fieldList/FieldList';
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
        <FieldList fields={props.fields} setProp={props.setProp} />
      </div>
    )}
    {props.entryMode === 'MANUAL_ENTRY' && (
      <div className="overlay-content">
        <FieldList fields={props.fields} setProp={props.setProp} />
      </div>
    )}
  </div>
);

export default AddCompanyDisplay;
