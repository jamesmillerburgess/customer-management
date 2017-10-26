describe('Login @watch', function() {
  let b;
  beforeEach(() => {
    b = browser;
    b.url('http://localhost:3000');
  });
  it('should be Agility CM', function() {
    expect(b.getTitle()).toBe('Agility CM');
  });
  it('defaults to login mode', () => {
    b.waitForExist('#register-mode-button');
    expect(b.elements('#register-mode-button').value.length).toBe(1);
    expect(b.elements('#login-submit-button').value.length).toBe(1);
    expect(b.elements('#login-mode-button').value.length).toBe(0);
    expect(b.elements('#register-submit-button').value.length).toBe(0);
    expect(b.elements('#username').value.length).toBe(1);
    expect(b.elements('#password').value.length).toBe(1);
    expect(b.elements('#password-again').value.length).toBe(0);
  });
  it('switches between register and login modes', () => {
    b.waitUntil(() => b.isExisting('#register-mode-button'), 5000);
    b.click('#register-mode-button');
    expect(b.elements('#login-mode-button').value.length).toBe(1);
    expect(b.elements('#register-submit-button').value.length).toBe(1);
    expect(b.elements('#register-mode-button').value.length).toBe(0);
    expect(b.elements('#login-submit-button').value.length).toBe(0);
    expect(b.elements('#username').value.length).toBe(1);
    expect(b.elements('#password').value.length).toBe(1);
    expect(b.elements('#password-again').value.length).toBe(1);
    b.click('#login-mode-button');
    expect(b.elements('#register-mode-button').value.length).toBe(1);
    expect(b.elements('#login-submit-button').value.length).toBe(1);
    expect(b.elements('#login-mode-button').value.length).toBe(0);
    expect(b.elements('#register-submit-button').value.length).toBe(0);
    expect(b.elements('#username').value.length).toBe(1);
    expect(b.elements('#password').value.length).toBe(1);
    expect(b.elements('#password-again').value.length).toBe(0);
  });
  it('validates login submission', () => {
    b.setValue('#username', '');
    b.setValue('#password', '');
    const getErr = () => b.getText('.home .error-message');
    expect(getErr()).toBe('');
    b.click('#login-submit-button');
    b.waitUntil(() => getErr() !== '', 5000);
    expect(getErr()).toBe('Match failed');
  });
  it('validates registration submission', () => {
    b.waitUntil(() => b.isExisting('#register-mode-button'), 5000);
    b.click('#register-mode-button');
    b.setValue('#username', 'test');
    b.setValue('#password', 'test');
    b.setValue('#password-again', 'testa');
    const getErr = () => b.getText('.home .error-message');
    expect(getErr()).toBe('');
    b.click('#register-submit-button');
    expect(getErr()).toBe('Passwords do not match');
    b.setValue('#password', '');
    b.setValue('#password-again', '');
    b.click('#register-submit-button');
    expect(getErr()).toBe('Password may not be empty');
    b.setValue('#username', '');
    b.setValue('#password', 'test');
    b.setValue('#password-again', 'test');
    b.click('#register-submit-button');
    expect(getErr()).toBe('Need to set a username or email');
  });
});
