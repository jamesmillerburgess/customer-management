import { connect } from 'react-redux';

import OpportunitiesContainer from './OpportunitiesContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import {
  setOverlayProp,
  clearOverlayProps,
} from '../../../state/actions/overlayActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  openOverlay: () => {
    dispatch(setAppProp('isOverlayOpen', true));
    dispatch(setAppProp('overlay', 'ADD_OPPORTUNITY'));
    dispatch(clearOverlayProps());
  },
});

const OpportunitiesConnect = connect(mapStateToProps, mapDispatchToProps)(
  OpportunitiesContainer
);

export default OpportunitiesConnect;
