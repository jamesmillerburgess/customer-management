import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import SubscriptionManagerContainer from './SubscriptionManagerContainer';

export const mapStateToProps = ({ app, subscriptions }) => ({
  subscriptions: {
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

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(
  SubscriptionManagerContainer
);

export default AppConnect;
