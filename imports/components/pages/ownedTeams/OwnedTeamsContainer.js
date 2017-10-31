import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import OwnedTeamsConnect from './OwnedTeamsConnect';
import Teams from '../../../api/team/teamCollection';

const sort = (a, b) => {
  return b.createDate - a.createDate;
};

const OwnedTeamsContainer = createContainer(props => {
  const user = Meteor.user();
  let ownedTeams = [];
  if (user && user.profile) {
    Meteor.subscribe('team.list', user.profile.ownedTeams || []);
    ownedTeams = Teams.find({ _id: { $in: user.profile.ownedTeams || [] } })
      .fetch()
      .sort(sort);
  }
  return { ...props, ownedTeams };
}, OwnedTeamsConnect);

export default OwnedTeamsContainer;
