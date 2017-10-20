import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import SubscriptionManagerContainer from './SubscriptionManagerContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';

export const mapStateToProps = ({ app, subscriptions }) => ({
  loading: app.loading === false ? false : true,
  subscriptions: {
    configurations: ['configurations.all'],
    constacts: ['contact.user'],
    companies: ['company.user'],
    opportunities: ['opportunity.user'],
    teams: [
      'team.single',
      Meteor.user() && Meteor.user().profile ? Meteor.user().profile.team : '',
    ],
    teamActivity: [
      'activity.team',
      Meteor.user() && Meteor.user().profile ? Meteor.user().profile.team : '',
    ],
    opportunityForecast: [
      'opportunity.team',
      Meteor.user() && Meteor.user().profile ? Meteor.user().profile.team : '',
    ],
  },
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setLoading: value => dispatch(setAppProp('loading', value)),
});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(
  SubscriptionManagerContainer
);

export default AppConnect;
