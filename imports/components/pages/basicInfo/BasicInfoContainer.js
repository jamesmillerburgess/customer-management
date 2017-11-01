import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import axios from 'axios';

import BasicInfoDisplay from './BasicInfoDisplay';
import Teams from '../../../api/team/teamCollection';
import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection';

const BasicInfoContainer = createContainer(props => {
  const languages =
    (FieldOptions.findOne({ type: 'LANGUAGE' }) || {}).options || [];
  const loadProfile = () => {
    const user = Meteor.user() || {};
    const username = user.username;
    const profile = user.profile || {};
    const team = profile.team;
    const locale = profile.locale;
    const avatarURL = profile.avatarURL || 'empty-profile-pic_wqnyvm.png';
    props.setHasLoaded(true);
    props.setUsername(username);
    props.setLocale(locale);
    props.setAvatarURL(profile.avatarURL);
    if (team) {
      props.setTeam({
        _id: team,
        name: Teams.findOne(team).name,
      });
    }
  };
  if (!Meteor.loggingIn() && !props.hasLoaded && !props.loading) {
    loadProfile();
  }
  const handleDrop = files => {
    // Push all the axios request promise into a single array
    // Initial FormData
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('tags', `user avatar`);
    formData.append('upload_preset', 'euqfrerp'); // Replace the preset name with your own
    formData.append('timestamp', (Date.now() / 1000) | 0);

    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    const uploader = axios
      .post(
        'https://api.cloudinary.com/v1_1/dqhfaa1im/image/upload',
        formData,
        {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }
      )
      .then(response => {
        const data = response.data;
        const avatarURL = data.public_id; // You should store this URL for future references in your app
        props.saveProfile({ avatarURL });
        props.setAvatarURL(avatarURL);
      });
  };
  return { ...props, languages, handleDrop };
}, BasicInfoDisplay);

export default BasicInfoContainer;
