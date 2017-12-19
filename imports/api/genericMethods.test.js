import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import StubCollections from 'meteor/hwillson:stub-collections';
import expect from 'expect.js';

import Activity from './activity/activityCollection';
import FieldLists from './fieldList/fieldListCollection';

import registerGenericMethods, * as GM from './genericMethods';

describe('genericMethods.js Functional Tests', function() {
  const Coll = new Mongo.Collection('Coll');
  before(() => {
    registerGenericMethods('coll', Coll, 'PAGE');
  });
  beforeEach(() => {
    StubCollections.stub([Coll, Activity, FieldLists]);
  });
  afterEach(() => {
    Coll.remove({});
    Activity.remove({});
    FieldLists.remove({});
    StubCollections.restore();
  });
  describe('*.create Meteor Method', () => {
    it('inserts a document into the collection and inserts an Activity', () => {
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
  describe('*.saveProperties Meteor Method', () => {
    it('saves changes to the properties specified in the FieldList', () => {
      FieldLists.insert({ page: 'PAGE', fields: [{ name: 'name' }] });
      Meteor.call('coll.create', { name: 'a' }, 'b');
      const id = Coll.findOne()._id;
      expect(Coll.findOne(id).name).to.be('a');
      Meteor.call(
        'coll.saveProperties',
        id,
        { name: 'b', notName: 'c' },
        () => {
          expect(Coll.findOne(id).name).to.be('b');
          expect(Coll.findOne(id).notName).to.be(undefined);
        }
      );
    });
  });
  // describe('*.addNote Meteor Method', () => {
  //   it('records the interaction in the document and inserts an activity', function(done) {
  //     Meteor.call('coll.create', { name: 'a' });
  //     const id = Coll.findOne()._id;
  //     expect(Coll.findOne(id).timeline.length).to.be(1);
  //     Meteor.call('coll.addNote', id, {}, () => {
  //       console.log('callback!');
  //       expect(Coll.findOne(id).timeline.length).to.be(1);
  //       done();
  //     });
  //   });
  // });
});
