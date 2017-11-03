import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import SubscriptionManagerContainer from './SubscriptionManagerContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';

const getContacts = state => {
  switch (state.filters.contacts) {
    case 'SELF':
      return ['contact.user'];
    case 'TEAM':
      return ['contact.team'];
    case 'ANY':
    default:
      return ['contact.any'];
  }
};

export const mapStateToProps = state => ({
  loading: state.app.loading === false ? false : true,
  subscriptions: {
    configurations: ['configurations.all'],
    contacts: getContacts(state),
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
