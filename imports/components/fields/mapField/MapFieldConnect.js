import { connect } from 'react-redux';

import MapFieldDisplay from './MapFieldDisplay';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

const API_KEY = 'AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc';
const URL_PREFIX =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';

export const getLocale = state => state.i18n.locale;
export const getGoogleMapURL = state =>
  `${URL_PREFIX}&key=${API_KEY}&language=${getLocale(state)}`;

export const mapStateToProps = (state, ownProps) => ({
  googleMapURL: getGoogleMapURL(state),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const MapFieldConnect = connect(mapStateToProps, mapDispatchToProps)(
  MapFieldDisplay
);

export default MapFieldConnect;
