import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import OwnedTeamsConnect from './OwnedTeamsConnect';
import Teams from '../../../api/team/teamCollection';

const sort = (a, b) => {
  return b.createDate - a.createDate;
};

const extractActivity = docs => {};

const TeamActivityContainer = createContainer(props => {
  const user = Meteor.user();
  let activity = [];
  if (user && user.profile) {
    Meteor.subscribe('team.activity', user.profile.team);
    // const team = Teams.findOne(user.profile.team);
    // const members = team ? team.members : [];
    // const activity = [
    //   ...Contacts.find()
    // ];

    // ownedTeams = Teams.find({ _id: { $in: user.profile.ownedTeams } })
    //   .fetch()
    //   .sort(sort);
  }
  return { ...props, activity };
}, OwnedTeamsConnect);

export default TeamActivityContainer;
