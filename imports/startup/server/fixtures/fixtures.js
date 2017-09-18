import Contacts from '../../../api/contact/contact.js';

const runFixtures = () => {
  if (Contacts.find({}).count() === 0) {
    Contacts.insert({ name: 'James Burgess' });
  }
};

export default runFixtures;
