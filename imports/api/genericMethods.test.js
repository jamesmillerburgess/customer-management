import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import expect from 'expect.js';

import Activity from './activity/activityCollection';
import registerGenericMethods, * as GM from './genericMethods';

describe('*.create Meteor Method', () => {
  const Coll = new Mongo.Collection('Coll');
  beforeEach(() => {
    Coll.remove();
    Activity.remove();
  });
  it('creates', () => {
    registerGenericMethods('coll', Coll);
    Meteor.call('coll.create', { name: 'a' }, 'b');
    expect(Coll.find().count()).to.be(1);
  });
});
