import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { I18n } from 'react-redux-i18n';

import AddCompanyDisplay from './AddCompanyDisplay';
import FieldLists from '../../../api/fieldList/fieldListCollection';

import {
  setOverlayProp,
  clearOverlayProps,
} from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

export const getEntryMode = (overlay = {}) =>
  overlay.entryMode || 'GOOGLE_PLACES';
export const getPage = entryMode => {
  switch (entryMode) {
    case 'MANUAL_ENTRY':
      return 'COMPANY_PROPERTIES';
    case 'GOOGLE_PLACES':
    default:
      return 'ADD_COMPANY_GOOGLE_PLACES';
  }
};
export const getLat = (overlay = {}) => (overlay.parsedPlace || {}).lat;
export const getLng = (overlay = {}) => (overlay.parsedPlace || {}).lng;

export const mapStateToProps = state => {
  const { errorMessage, showErrorMessage } = state.overlay;
  const entryMode = getEntryMode(state.overlay);
  const page = getPage(entryMode);
  const fields = (FieldLists.findOne({ page }) || {}).fields || [];
  return {
    entryMode,
    lat: getLat(state.overlay),
    lng: getLng(state.overlay),
    fields: fields.map(
      field => ({
        ...field,
        value: state.overlay[field.name] || field.default,
      }),
      {}
    ),
    errorMessage,
    errorMessageClass: showErrorMessage ? 'show' : 'hide',
  };
};

export const isEstablishment = place =>
  place.types.indexOf('establishment') !== -1;

export const parsePlace = place => {
  if (!isEstablishment(place)) {
    throw new Error(I18n.t('errors.notACompany'));
  }
  return {
    placeId: place.place_id,
    name: place.name,
    address: place.formatted_address,
    website: place.website,
    phoneNumber: place.international_phone_number,
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  };
};

export const mapDispatchToProps = dispatch => ({
  setEntryMode: entryMode => {
    dispatch(clearOverlayProps());
    dispatch(setOverlayProp('entryMode', entryMode));
  },
  setPlace: place => {
    let parsedPlace;
    try {
      parsedPlace = parsePlace(place);
    } catch (e) {
      dispatch(setOverlayProp('errorMessage', e.message));
      dispatch(setOverlayProp('showErrorMessage', true));
      setTimeout(
        () => dispatch(setOverlayProp('showErrorMessage', false)),
        5000
      );
    }
    dispatch(setOverlayProp('place', place));
    dispatch(setOverlayProp('parsedPlace', parsedPlace));
  },
});

const AddCompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  AddCompanyDisplay
);

export default AddCompanyConnect;
