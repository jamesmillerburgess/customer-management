import { connect } from 'react-redux';

import { setAppProp } from '../../state/actions/appActionCreators';
import { clearOverlayProps } from '../../state/actions/overlayActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  openOverlay: () => {
    dispatch(setAppProp('isOverlayOpen', true));
    dispatch(setAppProp('overlay', ownProps.overlay));
    dispatch(clearOverlayProps());
  },
});

const PageConnect = connect(mapStateToProps, mapDispatchToProps);

export default PageConnect;
