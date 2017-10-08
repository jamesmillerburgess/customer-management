import React from 'react';
import { connect } from 'react-redux';

import OpportunitiesContainer from './OpportunitiesContainer';

import { setAppProp } from '../../../state/actions/appActionCreators';
import { clearOverlayProps } from '../../../state/actions/overlayActionCreators';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  openOverlay: () => {
    dispatch(setAppProp('isOverlayOpen', true));
    dispatch(setAppProp('overlay', ownProps.overlay));
    dispatch(clearOverlayProps());
  },
});

const OpportunitiesConnect = connect(mapStateToProps, mapDispatchToProps)(
  OpportunitiesContainer
);

export default OpportunitiesConnect;
