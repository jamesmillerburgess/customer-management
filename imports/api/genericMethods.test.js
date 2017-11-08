import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import registerGenericMethods, * as GM from './genericMethods';
import FieldLists from './fieldList/fieldListCollection';

describe('addActivity Function', () => {
  it('handles having a user or not', () => {
    Meteor.loggedInUser = { username: 'a' };
    expect(() => GM.addActivity({}, FieldLists, 'a')).not.toThrow();
    FieldLists._name = 'hello';
    expect(() => GM.addActivity({}, FieldLists, 'a')).not.toThrow();
  });
});
describe('create Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    expect(() => GM.create(collection, { name: 'a' })).not.toThrow();
  });
  it('throws if there is no object', () => {
    const collection = new Mongo.Collection();
    expect(() => GM.create(collection, null)).toThrow();
  });
  // it('throws if there is no name on the object', () => {
  //   const collection = new Mongo.Collection();
  //   expect(() => GM.create(collection, {})).toThrow();
  //   expect(() => GM.create(collection, { name: null })).toThrow();
  // });
});
describe('saveProperties Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    const propertiesPage = 'PROPERTIES_PAGE';
    FieldLists.docs = [{ fields: [{}] }];
    expect(() =>
      GM.saveProperties(collection, propertiesPage, 'a', { name: 'a' })
    ).not.toThrow();
  });
  it('throws if objectId is not a string', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    const propertiesPage = 'PROPERTIES_PAGE';
    FieldLists.docs = [{ fields: [{}] }];
    expect(() =>
      GM.saveProperties(collection, propertiesPage, 1, { name: 'a' })
    ).toThrow();
  });
  it('throws if there is no document with the given objectId', () => {
    const collection = new Mongo.Collection();
    collection.docs = [];
    const propertiesPage = 'PROPERTIES_PAGE';
    FieldLists.docs = [{ fields: [{}] }];
    expect(() =>
      GM.saveProperties(collection, propertiesPage, 'a', { name: 'a' })
    ).toThrow();
  });
  it('calls opportunity.status if the collection is Opportunities and the status property is being modified', () => {
    const collection = new Mongo.Collection();
    collection._name = 'Opportunities';
    collection.docs = [{}];
    const propertiesPage = 'PROPERTIES_PAGE';
    FieldLists.docs = [{ fields: [{}] }];
    expect(() =>
      GM.saveProperties(collection, propertiesPage, 'a', { status: 'a' })
    ).not.toThrow();
  });
});
describe('logInteraction Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    Meteor.users.docs = [{ username: 'a' }];
    expect(() =>
      GM.logInteraction(collection, 'a', 'my note', 'NOTE')
    ).not.toThrow();
  });
  it('throws if objectId is not a string', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    Meteor.users.docs = [{ username: 'a' }];
    expect(() => GM.logInteraction(collection, 1, 'a', 'NOTE')).toThrow();
  });
});
describe('buildGenericMethods Function', () => {
  it('builds each method', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    const methods = GM.buildGenericMethods('a', collection, 'b');
    expect(() => methods['a.create']({ name: 'a' })).not.toThrow();
    expect(() => methods['a.archive'](['a'])).not.toThrow();
    expect(() => methods['a.saveProperties']('a', { name: 'a' })).not.toThrow();
    expect(() => methods['a.addNote']('a', 'b')).not.toThrow();
    expect(() => methods['a.logCall']('a', 'b')).not.toThrow();
    expect(() => methods['a.logEmail']('a', 'b')).not.toThrow();
    expect(() => methods['a.logMeeting']('a', 'b')).not.toThrow();
    expect(() => methods['a.logQuote']('a', 'b')).not.toThrow();
    expect(() => methods['a.search']('a')).not.toThrow();
  });
});
describe('registerGenericMethods Function', () => {
  it('registers each method', () => {
    registerGenericMethods('a', new Mongo.Collection(), 'b');
    expect(typeof Meteor._methods['a.create']).toBe('function');
    expect(typeof Meteor._methods['a.saveProperties']).toBe('function');
    expect(typeof Meteor._methods['a.addNote']).toBe('function');
    expect(typeof Meteor._methods['a.search']).toBe('function');
  });
});
