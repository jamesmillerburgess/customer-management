import { connect } from 'react-redux';

import AppDisplay from './AppDisplay';

export const mapStateToProps = ({ app }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
  overlay: app.overlay || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppDisplay);

export default AppConnect;
