import React from 'react';

import { REGISTER, LOGIN } from './HomeConstants';
import './HomeDisplay.scss';

const HomeDisplay = props => {
  return (
    <div className="home">
      <form
        className="login-form"
        onSubmit={e => {
          e.preventDefault();
          if (props.mode === LOGIN) {
            props.tryLogin(props.username, props.password);
          }
          if (props.mode === REGISTER) {
            props.tryRegister(
              props.username,
              props.password,
              props.passwordAgain
            );
          }
        }}
      >
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
            <button
              id="register-mode-button"
              type="button"
              className="button-invis"
              onClick={props.setToRegisterMode}
            >
              Register
            </button>
            <button
              id="login-submit-button"
              type="submit"
              className="button-primary"
            >
              Login
            </button>
          </div>
        ) : null}
        {props.mode === REGISTER ? (
          <div className="button-group">
            <button
              id="login-mode-button"
              type="button"
              className="button-invis"
              onClick={props.setToLoginMode}
            >
              Login
            </button>
            <button
              id="register-submit-button"
              type="submit"
              className="button-primary"
            >
              Register
            </button>
          </div>
        ) : null}
        <div className="error-message">{props.errorMessage}</div>
      </form>
    </div>
  );
};

export default HomeDisplay;
