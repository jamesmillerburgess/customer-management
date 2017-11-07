import React from 'react';
import DeepEqual from 'deep-equal';
const { compose, withProps, lifecycle } = require('recompose');
const { withScriptjs } = require('react-google-maps');
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

const PlaceFieldDisplay = compose(
  withProps({
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

          // this.setState({
          //   places,
          // });

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
    placeholder=""
  >
    <input type="text" placeholder="" />
  </StandaloneSearchBox>
));

export default PlaceFieldDisplay;
