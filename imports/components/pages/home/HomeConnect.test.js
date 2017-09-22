import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import HomeConnect, {
  mapStateToProps,
  mapDispatchToProps,
  tryLogin,
  tryRegister,
} from './HomeConnect';

import { LOGIN, REGISTER } from './HomeConstants';

describe('HomeConnect Component', () => {
  it('connects HomeDisplay', () => {
    expect(HomeConnect.displayName).toBe('Connect(HomeDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { login: 'a', other: 'b' };
    expect(mapStateToProps(state)).toEqual({
      username: '',
      mode: LOGIN,
      password: '',
      passwordAgain: '',
      errorMessage: '',
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(() => null, ownProps);
    expect(props.setUsername).not.toThrow();
    expect(props.setPassword).not.toThrow();
    expect(props.setPasswordAgain).not.toThrow();
    expect(props.setErrorMessage).not.toThrow();
    expect(props.setToRegisterMode).not.toThrow();
    expect(props.setToLoginMode).not.toThrow();
    expect(props.tryLogin).not.toThrow();
    expect(props.tryRegister).not.toThrow();
  });
});
describe('tryLogin Function', () => {
  it('calls dispatch if it calls back with an error', () => {
    const dispatch = jest.fn();
    Meteor.err = { reason: 'because' };
    tryLogin(null, null, dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('calls history.push if it calls back without an error', () => {
    const history = { push: jest.fn() };
    Meteor.err = null;
    tryLogin(null, null, null, history);
    expect(history.push).toHaveBeenCalled();
  });
});
describe('tryRegister Function', () => {
  it('calls dispatch if passwords do not match', () => {
    const dispatch = jest.fn();
    tryRegister(null, 'a', 'b', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('calls dispatch if it calls back with an error', () => {
    const dispatch = jest.fn();
    Accounts.err = { reason: 'because' };
    tryRegister(null, 'a', 'a', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('calls history.push if it calls back without an error', () => {
    const history = { push: jest.fn() };
    Accounts.err = null;
    tryRegister(null, 'a', 'a', null, history);
    expect(history.push).toHaveBeenCalled();
  });
});
