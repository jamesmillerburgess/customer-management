import { connect } from 'react-redux';

import CompaniesContainer from './CompaniesContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import {
  setOverlayProp,
  clearOverlayProps,
} from '../../../state/actions/overlayActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  openOverlay: () => {
    dispatch(setAppProp('isOverlayOpen', true));
    dispatch(setAppProp('overlay', 'ADD_COMPANY'));
    dispatch(clearOverlayProps());
  },
});

const CompaniesConnect = connect(mapStateToProps, mapDispatchToProps)(
  CompaniesContainer
);

export default CompaniesConnect;
