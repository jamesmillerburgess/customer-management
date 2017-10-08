import { connect } from 'react-redux';

import AppContainer from './AppContainer';

export const mapStateToProps = ({ app }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
  overlay: app.overlay || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppConnect;
