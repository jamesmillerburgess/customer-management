import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import AppContainer from './AppContainer';

export const mapStateToProps = ({ app, subscriptions }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
  overlay: app.overlay || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppConnect;
