import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import HomeDisplay from './HomeDisplay';

import { LOGIN, REGISTER } from './HomeConstants';

import { setLoginProp } from '../../../state/actions/loginActionCreators';
import { setProfileProp } from '../../../state/actions/profileActionCreators';

export const mapStateToProps = ({ login }) => ({
  username: login.username || '',
  password: login.password || '',
  passwordAgain: login.passwordAgain || '',
  errorMessage: login.errorMessage || '',
  mode: login.mode || LOGIN,
});

export const tryLogin = (username, password, dispatch, history) => {
  Meteor.loginWithPassword(username, password, (err, res) => {
    if (err) {
      dispatch(setLoginProp('errorMessage', err.reason));
    } else {
      dispatch(setProfileProp('username', Meteor.user().username));
      history.push('/');
    }
  });
};

export const tryRegister = (
  username,
  password,
  passwordAgain,
  dispatch,
  history
) => {
  if (password !== passwordAgain) {
    dispatch(setLoginProp('errorMessage', 'Passwords do not match'));
    return;
  }
  const user = { username, password };
  Accounts.createUser(user, (err, res) => {
    if (err) {
      dispatch(setLoginProp('errorMessage', err.reason));
    } else {
      history.push('/');
    }
  });
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setUsername: value => dispatch(setLoginProp('username', value)),
  setPassword: value => dispatch(setLoginProp('password', value)),
  setPasswordAgain: value => dispatch(setLoginProp('passwordAgain', value)),
  setErrorMessage: value => dispatch(setLoginProp('errorMessage', value)),
  setToRegisterMode: value => dispatch(setLoginProp('mode', REGISTER)),
  setToLoginMode: value => dispatch(setLoginProp('mode', LOGIN)),
  tryLogin: (username, password) =>
    tryLogin(username, password, dispatch, ownProps.history),
  tryRegister: (username, password, passwordAgain) =>
    tryRegister(username, password, passwordAgain, dispatch, ownProps.history),
});

const HomeConnect = connect(mapStateToProps, mapDispatchToProps)(HomeDisplay);

export default HomeConnect;
