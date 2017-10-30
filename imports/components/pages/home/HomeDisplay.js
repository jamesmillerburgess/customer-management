import React from 'react';
import { Translate } from 'react-redux-i18n';

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
        <div className="login-title">
          <Translate value="app.title" />
        </div>
        <div className="input-group">
          <div className="input-label">
            <Translate value="home.username" />
          </div>
          <input
            id="username"
            className="login-input"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">
            <Translate value="home.password" />
          </div>
          <input
            id="password"
            className="login-password"
            type="password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
        </div>
        {props.mode === REGISTER && (
          <div className="input-group">
            <div className="input-label">
              <Translate value="home.passwordAgain" />
            </div>
            <input
              id="password-again"
              className="login-password-again"
              type="password"
              value={props.passwordAgain}
              onChange={e => props.setPasswordAgain(e.target.value)}
            />
          </div>
        )}
        {props.mode === REGISTER ? (
          <div className="button-group">
            <button
              id="login-mode-button"
              type="button"
              className="button-invis"
              onClick={props.setToLoginMode}
            >
              <Translate value="home.logIn" />
            </button>
            <button
              id="register-submit-button"
              type="submit"
              className="button-primary"
            >
              <Translate value="home.register" />
            </button>
          </div>
        ) : (
          <div className="button-group">
            <button
              id="register-mode-button"
              type="button"
              className="button-invis"
              onClick={props.setToRegisterMode}
            >
              <Translate value="home.register" />
            </button>
            <button
              id="login-submit-button"
              type="submit"
              className="button-primary"
            >
              <Translate value="home.logIn" />
            </button>
          </div>
        )}
        <div className="error-message">{props.errorMessage}</div>
      </form>
    </div>
  );
};

export default HomeDisplay;
