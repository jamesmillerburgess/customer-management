describe('Accounts', function() {
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
    b.waitForExist('#register-mode-button');
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
  it('should validate login', () => {
    b.setValue('#username', 'test');
    b.setValue('#password', 'test');
    const getErr = () => b.getText('.home .error-message');
    expect(getErr()).toBe('');
    b.click('#login-submit-button');
    expect(getErr()).toBe('User not found');
  });
  it('should validate registration', () => {
    b.waitForExist('#register-mode-button');
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