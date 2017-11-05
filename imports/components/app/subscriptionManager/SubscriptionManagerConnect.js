import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import SubscriptionManagerContainer from './SubscriptionManagerContainer';
import { setAppProp } from '../../../state/actions/appActionCreators';

const getPageNumber = (state, tableId) =>
  ((state.dataTables || {})[tableId] || {}).pageNumber || 0;

const getPaginatedSubscription = (state, options) => {
  const pageNumber = getPageNumber(state, options.prefix);
  return [getSubscriptionName(state, options), pageNumber];
};

const getOwnerFilter = (state, prefix) =>
  (((state || {}).dataTables || {})[prefix] || {}).ownerFilter;

export const getSubscriptionName = (state, options = {}) => {
  const { prefix } = options;
  switch (getOwnerFilter(state, prefix)) {
    case 'ANY':
      return `${prefix}.any`;
    case 'TEAM':
      return `${prefix}.team`;
    case 'SELF':
    default:
      return `${prefix}.user`;
  }
};

const getSubscription = (state, options) => {
  if (options.paginated) {
    return getPaginatedSubscription(state, options);
  }
  return [getSubscriptionName(state, options)];
};

export const mapStateToProps = state => ({
  loading: state.app.loading === false ? false : true,
  subscriptions: {
    configurations: ['configurations.all'],
    contacts: getSubscription(state, { prefix: 'contact', paginated: true }),
    companies: getSubscription(state, {
      prefix: 'company',
      paginated: true,
    }),
    opportunities: getSubscription(state, { prefix: 'opportunity' }),
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
