import HomeConnect, {
  mapStateToProps,
  mapDispatchToProps,
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
    const props = mapDispatchToProps(() => null);
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
