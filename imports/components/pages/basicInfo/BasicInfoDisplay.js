import React from 'react';

import TextField from '../../fields/textField/TextField';
import TeamField from '../../fields/teamField/TeamField';

const BasicInfoDisplay = props => (
  <form
    className="form"
    onSubmit={e => {
      e.preventDefault();
      props.saveProfile({ username: props.username, team: props.team._id });
    }}
  >
    <div className="input-group">
      <div className="input-label">Username</div>
      <TextField
        id="username"
        value={props.username}
        onChange={props.setUsername}
      />
    </div>
    <div className="input-group">
      <div className="input-label">Team</div>
      <TeamField value={props.team} onChange={props.setTeam} />
    </div>
    <button type="submit" className="button-primary">
      Save
    </button>
  </form>
);

export default BasicInfoDisplay;
