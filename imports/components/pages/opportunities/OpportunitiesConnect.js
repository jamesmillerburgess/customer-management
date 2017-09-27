import { connect } from 'react-redux';

import OpportunitiesContainer from './OpportunitiesContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';
import { setOverlayProp } from '../../../state/actions/overlayActionCreators';

export const mapStateToProps = ({ app }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsOverlayOpen: value => {
    dispatch(setAppProp('isOverlayOpen', value));
    dispatch(setAppProp('overlay', 'ADD_OPPORTUNITY'));
    dispatch(setOverlayProp('name', ''));
    dispatch(setOverlayProp('website', ''));
  },
});

const OpportunitiesConnect = connect(mapStateToProps, mapDispatchToProps)(
  OpportunitiesContainer
);

export default OpportunitiesConnect;
