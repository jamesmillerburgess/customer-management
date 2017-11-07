import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MapField = withScriptjs(
  withGoogleMap(props => <GoogleMap {...props}>{props.children}</GoogleMap>)
);

MapField.defaultProps = {
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div className="map-field-loading" />,
  containerElement: <div className="map-field-container" />,
  mapElement: <div className="map-field" />,
  defaultZoom: 15,
};

export default MapField;
