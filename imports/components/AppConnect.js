import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import AppContainer from './AppContainer';

export const mapStateToProps = ({ app, subscriptions }) => ({
  isOverlayOpen: app.isOverlayOpen || false,
  overlay: app.overlay || '',
  subscriptions: {
    constacts: ['contact.user', Meteor.userId()],
    companies: ['company.user', Meteor.userId()],
  },
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppConnect;
