import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import * as GM from './genericMethods';

describe('create Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    expect(() => GM.create(collection, { name: 'a' })).not.toThrow();
  });
});
describe('saveProperties Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    const objectProps = () => [{ name: 'name' }];
    expect(() =>
      GM.saveProperties(collection, objectProps, 'a', { name: 'a' })
    ).not.toThrow();
  });
});
describe('addNote Function', () => {
  it('does not throw', () => {
    const collection = new Mongo.Collection();
    collection.docs = [{}];
    Meteor.users.docs = [{ username: 'a' }];
    expect(() => GM.addNote(collection, 'a', 'my note')).not.toThrow();
  });
});
