import React from 'react';
import { Translate } from 'react-redux-i18n';

import TextField from '../../fields/textField/TextField';
import TeamField from '../../fields/teamField/TeamField';
import OptionField from '../../fields/optionField/OptionField';

const BasicInfoDisplay = props => (
  <form
    className="form"
    onSubmit={e => {
      e.preventDefault();
      props.saveProfile({
        username: props.username,
        team: props.team._id,
        profile: {
          locale: props.locale,
        },
      });
    }}
  >
    <div className="input-group">
      <div className="input-label">
        <Translate value="profile.username" />
      </div>
      <TextField
        id="username"
        value={props.username}
        onChange={props.setUsername}
      />
    </div>
    <div className="input-group">
      <div className="input-label">
        <Translate value="profile.team" />
      </div>
      <TeamField value={props.team} onChange={props.setTeam} />
    </div>
    <div className="input-group">
      <div className="input-label">
        <Translate value="profile.locale" />
      </div>
      <OptionField
        value={props.locale}
        onChange={props.setLocale}
        options={props.languages}
      />
    </div>
    <button type="submit" className="button-primary">
      Save
    </button>
  </form>
);

export default BasicInfoDisplay;
