import React from 'react';

import { REGISTER, LOGIN } from './HomeConnect';
import './HomeDisplay.scss';

const HomeDisplay = props => {
  return (
    <div className="home">
      <div className="login-form">
        <div className="login-title">Agility Customer Management</div>
        <div className="input-group">
          <div className="input-label">Username</div>
          <input
            id="username"
            className="login-input"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">Password</div>
          <input
            id="password"
            className="login-password"
            type="password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
        </div>
        {props.mode === REGISTER ? (
          <div className="input-group">
            <div className="input-label">Password again</div>
            <input
              id="passwordAgain"
              className="login-password-again"
              type="password"
              value={props.passwordAgain}
              onChange={e => props.setPasswordAgain(e.target.value)}
            />
          </div>
        ) : null}
        {props.mode === LOGIN ? (
          <div className="button-group">
            <button className="button-invis" onClick={props.setToRegisterMode}>
              Register
            </button>
            <button
              className="button-primary"
              onClick={e => props.tryLogin(e, props.username, props.password)}
            >
              Login
            </button>
          </div>
        ) : null}
        {props.mode === REGISTER ? (
          <div className="button-group">
            <button className="button-invis" onClick={props.setToLoginMode}>
              Login
            </button>
            <button
              className="button-primary"
              onClick={e =>
                props.tryRegister(
                  e,
                  props.username,
                  props.password,
                  props.passwordAgain
                )}
            >
              Register
            </button>
          </div>
        ) : null}
        <div className="error-message">{props.errorMessage}</div>
      </div>
    </div>
  );
};

export default HomeDisplay;
