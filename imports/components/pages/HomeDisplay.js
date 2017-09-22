import React from 'react';

import './HomeDisplay.scss';

const HomeDisplay = ({ login, dispatchers }) => {
  return (
    <div className="home">
      <div className="login-form">
        <div className="login-title">Agility Customer Management</div>
        <div className="input-group">
          <div className="input-label">Username</div>
          <input
            id="username"
            className="login-input"
            value={login.username}
            onChange={e => dispatchers.setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">Password</div>
          <input
            id="password"
            className="login-password"
            type="password"
            value={login.password}
            onChange={e => dispatchers.setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="button-invis">Register</button>
          <button className="button-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

HomeDisplay.defaultProps = {
  login: {
    username: '',
    password: '',
    passwordAgain: '',
  },
  dispatchers: {},
};

export default HomeDisplay;
