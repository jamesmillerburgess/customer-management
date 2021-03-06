import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import OpportunityForecastDisplay from './OpportunityForecastDisplay';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import Teams from '../../../api/team/teamCollection';

const APPOINTMENT_SCHEDULED = 'APPOINTMENT_SCHEDULED';
const QUALIFIED_TO_BUY = 'QUALIFIED_TO_BUY';
const PRESENTATION_SCHEDULED = 'PRESENTATION_SCHEDULED';
const DECISION_MAKER_BOUGHT_IN = 'DECISION_MAKER_BOUGHT_IN';
const CONTRACT_SENT = 'CONTRACT_SENT';
const CLOSED_WON = 'CLOSED_WON';
const CLOSED_LOST = 'CLOSED_LOST';

export const STATUS_VALUES = [
  APPOINTMENT_SCHEDULED,
  QUALIFIED_TO_BUY,
  PRESENTATION_SCHEDULED,
  DECISION_MAKER_BOUGHT_IN,
  CONTRACT_SENT,
  CLOSED_WON,
  CLOSED_LOST,
];

export const STATUS_PROBABILITIES = [0.2, 0.4, 0.6, 0.8, 0.9, 1, 0];

const OpportunityForecastContainer = createContainer(props => {
  const user = Meteor.user();
  let opportunityForecast = [0, 0, 0, 0, 0, 0, 0];
  if (user && user.profile) {
    const teamId = user.profile.team;
    const team = Teams.findOne(teamId);
    const ids = team && team.members ? team.members : [Meteor.userId()];
    const range = moment.range(
      moment().date(1),
      moment()
        .add(1, 'months')
        .date(0)
    );
    opportunityForecast = Opportunities.find({
      'users.0': { $in: ids },
    })
      .fetch()
      .filter(opp => range.contains(moment(opp.closeDate)))
      .reduce(
        (prev, curr) => {
          const i = STATUS_VALUES.indexOf(curr.status);
          if (i !== -1) {
            prev[i] += +curr.amount * STATUS_PROBABILITIES[i];
          }
          return prev;
        },
        [0, 0, 0, 0, 0, 0, 0]
      );
  }
  const showWidget =
    opportunityForecast.reduce((prev, curr) => prev + curr, 0) > 0;
  return { ...props, opportunityForecast, showWidget };
}, OpportunityForecastDisplay);

export default OpportunityForecastContainer;
