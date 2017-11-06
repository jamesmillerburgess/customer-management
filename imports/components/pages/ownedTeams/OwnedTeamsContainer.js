import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import OwnedTeamsConnect from './OwnedTeamsConnect';
import Teams from '../../../api/team/teamCollection';

const sort = (a, b) => {
  return b.createDate - a.createDate;
};

export const getId = a => a._id;

const OwnedTeamsContainer = createContainer(props => {
  const user = Meteor.user();
  let ownedTeams = [];
  if (user && user.profile) {
    Meteor.subscribe('team.list', user.profile.ownedTeams || []);
    ownedTeams = Teams.find({ _id: { $in: user.profile.ownedTeams || [] } })
      .fetch()
      .sort(sort);
  }
  const deleteTeams = (selectedTeams, cb) => {
    Meteor.call('team.remove', Object.keys(selectedTeams), (err, res) => {
      if (err) {
        console.log(err);
      }
    });
    cb();
  };
  return { ...props, ownedTeams, deleteTeams };
}, OwnedTeamsConnect);

export default OwnedTeamsContainer;
