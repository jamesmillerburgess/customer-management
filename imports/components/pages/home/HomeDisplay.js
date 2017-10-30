import React from 'react';
import { Translate } from 'react-redux-i18n';

import { REGISTER, LOGIN } from './HomeConstants';
import './HomeDisplay.scss';

const HomeDisplay = props => {
  const buttonGroup =
    props.mode === REGISTER
      ? {
          id1: 'login-mode-button',
          onClick1: props.setToLoginMode,
          label1: 'home.logIn',
          id2: 'register-submit-button',
          label2: 'home.register',
        }
      : {
          id1: 'register-mode-button',
          onClick1: props.setToRegisterMode,
          label1: 'home.register',
          id2: 'login-submit-button',
          label2: 'home.logIn',
        };
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
        <div className="button-group">
          <button
            id={buttonGroup.id1}
            type="button"
            className="button-invis"
            onClick={buttonGroup.onClick1}
          >
            <Translate value={buttonGroup.label1} />
          </button>
          <button id={buttonGroup.id2} type="submit" className="button-primary">
            <Translate value={buttonGroup.label2} />
          </button>
        </div>
        <div className="error-message">{props.errorMessage}</div>
      </form>
    </div>
  );
};

export default HomeDisplay;
