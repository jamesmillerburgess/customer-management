import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { setLocale } from 'react-redux-i18n';

import AppContainer from './AppContainer';

export const mapStateToProps = ({ app, subscriptions, i18n }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
  overlay: app.overlay || '',
  locale: i18n.locale || 'en-us',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setLocale: value => dispatch(setLocale(value)),
});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppConnect;
