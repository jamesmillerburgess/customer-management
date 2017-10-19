describe('Chimp Mocha', function() {
  describe('Page title', function() {
    it('should be Agility CM @watch', function() {
      browser.url('http://localhost:3000');
      expect(browser.getTitle()).toBe('Agility CM');
    });
    it('should register a user @watch', () => {
      browser.url('http://localhost:3000');
      browser.waitForExist('#register-mode-button');
      expect(browser.elements('#register-mode-button').value.length).toBe(1);
      expect(browser.elements('#login-submit-button').value.length).toBe(1);
      expect(browser.elements('#login-mode-button').value.length).toBe(0);
      expect(browser.elements('#register-submit-button').value.length).toBe(0);
      browser.click('#register-mode-button');
      expect(browser.elements('#login-mode-button').value.length).toBe(12);
      expect(browser.elements('#register-submit-button').value.length).toBe(1);
      expect(browser.elements('#register-mode-button').value.length).toBe(0);
      expect(browser.elements('#login-submit-button').value.length).toBe(0);
    });
  });
});
