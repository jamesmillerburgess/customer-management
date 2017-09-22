import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="login-form">
        <div className="login-title">Agility Customer Management</div>
        <div className="input-group">
          <div className="input-label">Username</div>
          <input className="login-input" />
        </div>
        <div className="input-group">
          <div className="input-label">Password</div>
          <input className="login-password" type="password" />
        </div>
        <div className="button-group">
          <button className="button-invis">Register</button>
          <button className="button-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
