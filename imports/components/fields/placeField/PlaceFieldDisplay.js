import React from 'react';
import DeepEqual from 'deep-equal';
const { compose, withProps, lifecycle } = require('recompose');
const { withScriptjs } = require('react-google-maps');
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

export function onSearchBoxMounted(ref) {
  this.setState({ refs: { searchBox: ref } });
}

export function onPlacesChanged() {
  const places = this.state.refs.searchBox.getPlaces();
  this.props.onChange(places[0]);
}

export function componentWillMount() {
  this.setState({
    refs: {},
    places: [],
    onSearchBoxMounted: onSearchBoxMounted.bind(this),
    onPlacesChanged: onPlacesChanged.bind(this),
  });
}

export const InnerComponent = props => (
  <StandaloneSearchBox
    ref={props.onSearchBoxMounted}
    bounds={props.bounds}
    onPlacesChanged={props.onPlacesChanged}
    placeholder=""
  >
    <input type="text" placeholder="" />
  </StandaloneSearchBox>
);

const PlaceFieldDisplay = compose(
  withProps({
    loadingElement: <div className="map-field-loading" />,
    containerElement: <div className="map-field-container" />,
  }),
  lifecycle({ componentWillMount }),
  withScriptjs
)(InnerComponent);

export default PlaceFieldDisplay;
