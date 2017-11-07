import React from 'react';
const { compose, withProps, lifecycle } = require('recompose');
const { withScriptjs } = require('react-google-maps');
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

const PlaceField = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="map-field-loading" />,
    containerElement: <div className="map-field-container" />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places,
          });

          this.props.onChange(places[0]);
        },
      });
    },
  }),
  withScriptjs
)(props => (
  <StandaloneSearchBox
    ref={props.onSearchBoxMounted}
    bounds={props.bounds}
    onPlacesChanged={props.onPlacesChanged}
  >
    <input type="text" />
  </StandaloneSearchBox>
));

export default PlaceField;
