import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { I18n } from 'react-redux-i18n';

import AddCompanyDisplay from './AddCompanyDisplay';
import FieldLists from '../../../api/fieldList/fieldListCollection';

import { setOverlayProp } from '../../../state/actions/overlayActionCreators';
import { setAppProp } from '../../../state/actions/appActionCreators';

export const mapStateToProps = ({ app, overlay }, ownProps) => {
  const { errorMessage, showErrorMessage } = overlay;
  const { fields } = FieldLists.findOne({ page: ownProps.page }) || {
    fields: [],
  };
  return {
    lat: overlay.lat,
    lng: overlay.lng,
    fields: fields.map(
      field => ({ ...field, value: overlay[field.name] || field.default }),
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

export const mapDispatchToProps = (dispatch, ownProps) => ({
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
