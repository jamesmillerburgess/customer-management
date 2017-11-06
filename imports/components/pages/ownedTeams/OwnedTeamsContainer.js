import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import OwnedTeamsConnect from './OwnedTeamsConnect';
import Teams from '../../../api/team/teamCollection';

export const deleteTeams = (selectedTeams, cb) => {
  Meteor.call('team.remove', Object.keys(selectedTeams), (err, res) => {
    if (err) {
      console.log(err);
    }
  });
  cb();
};

const OwnedTeamsContainer = createContainer(props => {
  const user = Meteor.user();
  let ownedTeams = [];
  if (user && user.profile) {
    Meteor.subscribe('team.list', user.profile.ownedTeams || []);
    ownedTeams = Teams.find(
      { _id: { $in: user.profile.ownedTeams || [] } },
      { sort: { createDate: -1 } }
    ).fetch();
  }
  return { ...props, ownedTeams, deleteTeams };
}, OwnedTeamsConnect);

export default OwnedTeamsContainer;
