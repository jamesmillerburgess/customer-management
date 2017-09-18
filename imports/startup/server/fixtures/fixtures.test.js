import Contacts from '../../../api/contact/contact.js';
import runFixtures from './fixtures.js';

describe('runFixtures', () => {
  beforeEach(() => {
    Contacts.remove();
  });
  it('populates contacts if the collection is empty', () => {
    expect(Contacts.find({}).count()).toBe(0);
    runFixtures();
    expect(Contacts.find({}).count()).toBe(1);
  });
  it('does not populate contacts if the collection is not empty', () => {
    Contacts.insert();
    expect(Contacts.find({}).count()).toBe(1);
    runFixtures();
    expect(Contacts.find({}).count()).toBe(1);
  });
});
