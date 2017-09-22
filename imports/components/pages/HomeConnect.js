import { connect } from 'react-redux';
import { Accounts } from 'meteor/accounts-base';

import HomeDisplay from './HomeDisplay';

import { setLoginProp } from '../../state/actions/loginActionCreators';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';

export const mapStateToProps = ({ login }) => ({
  username: login.username || '',
  password: login.password || '',
  passwordAgain: login.passwordAgain || '',
  errorMessage: login.errorMessage || '',
  mode: login.mode || LOGIN,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setUsername: value => dispatch(setLoginProp('username', value)),
  setPassword: value => dispatch(setLoginProp('password', value)),
  setPasswordAgain: value => dispatch(setLoginProp('passwordAgain', value)),
  setErrorMessage: value => dispatch(setLoginProp('errorMessage', value)),
  setToRegisterMode: value => dispatch(setLoginProp('mode', REGISTER)),
  setToLoginMode: value => dispatch(setLoginProp('mode', LOGIN)),
  tryLogin: (username, password) => {
    Meteor.loginWithPassword(username, password, (err, res) => {
      if (err) {
        dispatch(setLoginProp('errorMessage', err.reason));
      } else {
        ownProps.history.push('/');
      }
    });
  },
  tryRegister: (username, password, passwordAgain) => {
    if (password !== passwordAgain) {
      dispatch(setLoginProp('errorMessage', 'Passwords do not match'));
      return;
    }
    const user = { username, password };
    Accounts.createUser(user, (err, res) => {
      if (err) {
        dispatch(setLoginProp('errorMessage', err.reason));
      } else {
        ownProps.history.push('/');
      }
    });
  },
});

const HomeConnect = connect(mapStateToProps, mapDispatchToProps)(HomeDisplay);

export default HomeConnect;
