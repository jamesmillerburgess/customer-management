import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapFieldDisplay = withScriptjs(
  withGoogleMap(props => {
    let defaultCenter = props.defaultCenter || {};
    if (!props.defaultCenter.lat || !props.defaultCenter.lng) {
      defaultCenter = undefined;
    }
    const markers = props.markers.filter(marker => marker.lat && marker.lng);
    return (
      <GoogleMap {...props} defaultCenter={defaultCenter}>
        {markers.map(marker => <Marker key={marker} position={marker} />)}
      </GoogleMap>
    );
  })
);

MapFieldDisplay.defaultProps = {
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div className="map-field-loading" />,
  containerElement: <div className="map-field-container" />,
  mapElement: <div className="map-field" />,
  defaultZoom: 15,
};

export default MapFieldDisplay;
