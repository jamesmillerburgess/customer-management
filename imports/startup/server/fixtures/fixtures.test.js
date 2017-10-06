import Contacts from '../../../api/contact/contactCollection.js';
import runFixtures from './fixtures.js';

describe('runFixtures', () => {
  it('does not throw', () => {
    expect(runFixtures).not.toThrow();
  });
});
