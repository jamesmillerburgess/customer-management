import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { Translate } from 'react-redux-i18n';

export const innerComponent = props => {
  let defaultCenter = props.defaultCenter || {};
  let loading = false;
  if (!defaultCenter.lat || !defaultCenter.lng) {
    defaultCenter = undefined;
    loading = true;
  }
  const markers = (props.markers || []).filter(
    marker => marker.lat && marker.lng
  );
  if (loading) {
    return <div className="map-field-loading" />;
  }
  return (
    <GoogleMap {...props} defaultCenter={defaultCenter}>
      {markers.map(marker => <Marker key={marker} position={marker} />)}
    </GoogleMap>
  );
};

const MapFieldDisplay = withScriptjs(withGoogleMap(innerComponent));

MapFieldDisplay.defaultProps = {
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div className="map-field-loading" />,
  containerElement: <div className="map-field-container" />,
  mapElement: <div className="map-field" />,
  defaultZoom: 15,
};

export default MapFieldDisplay;
