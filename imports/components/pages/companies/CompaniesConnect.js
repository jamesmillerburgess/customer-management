import { connect } from 'react-redux';

import CompaniesContainer from './CompaniesContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { setOverlayProp } from '../../../state/actions/overlayActionCreators';

export const mapStateToProps = ({ app }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsOverlayOpen: value => {
    dispatch(setAppProp('isOverlayOpen', value));
    dispatch(setOverlayProp('name', ''));
    dispatch(setOverlayProp('website', ''));
  },
});

const CompaniesConnect = connect(mapStateToProps, mapDispatchToProps)(
  CompaniesContainer
);

export default CompaniesConnect;
