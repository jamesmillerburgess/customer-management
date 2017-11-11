import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import StubCollections from 'meteor/hwillson:stub-collections';
import expect from 'expect.js';

import Activity from './activity/activityCollection';
import registerGenericMethods, * as GM from './genericMethods';

describe('genericMethods.js Functional Tests', () => {
  const Coll = new Mongo.Collection('Coll');
  beforeEach(() => {
    StubCollections.stub([Coll, Activity]);
    Coll.remove();
    Activity.remove();
  });
  afterEach(() => {
    StubCollections.restore();
  });
  describe('*.create Meteor Method', () => {
    it('inserts a document into the collection and inserts an Activity', () => {
      registerGenericMethods('coll', Coll);
      expect(Coll.find().count()).to.be(0);
      expect(Activity.find().count()).to.be(0);
      Meteor.call('coll.create', { name: 'a' }, 'b');
      expect(Coll.find().count()).to.be(1);
      expect(Coll.findOne().isArchived).to.be(false);
      expect(Activity.find().count()).to.be(1);
      expect(Activity.findOne().type).to.be('CREATION');
    });
  });
  describe('*.archive Meteor Method', () => {
    it('changes isArchived to true and inserts an Activity', () => {
      Meteor.call('coll.create', { name: 'a' }, 'b');
      const id = Coll.findOne()._id;
      expect(Activity.find({ type: 'ARCHIVAL' }).count()).to.be(0);
      Meteor.call('coll.archive', [id]);
      expect(Coll.findOne(id).isArchived).to.be(true);
      expect(Activity.find({ type: 'ARCHIVAL' }).count()).to.be(1);
    });
  });
});
