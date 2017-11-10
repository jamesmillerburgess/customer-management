import { Meteor } from 'meteor/meteor';

import * as team from './teamMethods';
import Teams from './teamCollection';

describe('teamMethods Script', () => {
  describe('team.create Meteor Method', () => {
    it('creates a team', () => {
      Teams.docs = [];
      expect(Teams.num).toBe(0);
      team.create('a');
      expect(Teams.num).toBe(1);
    });
    it('throws with invalid params', () => {
      expect(() => team.create()).toThrow();
      expect(() => team.create(null)).toThrow();
      expect(() => team.create('')).toThrow();
      expect(() => team.create(1)).toThrow();
    });
    it('throws if there is already a team with the same name', () => {
      Teams.docs = [{ name: 'a' }];
      expect(() => team.create('a')).toThrow();
    });
  });
  describe('team.remove Meteor Method', () => {
    it('handles an array of teamIds passed', () => {
      Teams.docs = [{ _id: 'a', members: ['b'] }];
      Meteor.users.docs = [{ _id: 'b', teams: ['a'] }];
      expect(() => team.remove(['a'])).not.toThrow();
    });
    it('removes the team and updates the members', () => {
      Teams.docs = [{ _id: 'a', members: ['b'] }];
      Meteor.users.docs = [{ _id: 'b', teams: ['a'] }];
      expect(() => team.remove('a')).not.toThrow();
    });
    it('throws with invalid params', () => {
      Teams.docs = [{ _id: 'a', members: ['b'] }];
      Meteor.users.docs = [{ _id: 'b', teams: ['a'] }];
      expect(() => team.remove(null)).toThrow();
      expect(() => team.remove(1)).toThrow();
    });
    it('throws if there is no matching team', () => {
      Teams.docs = [];
      Meteor.users.docs = [{ _id: 'b' }];
      expect(() => team.remove('a')).toThrow();
    });
  });
  describe('team.update Meteor Method', () => {
    it('updates the team', () => {
      Teams.docs = [{}];
      expect(() => team.update('a', { name: 'b' })).not.toThrow();
    });
    it('throws with invalid params', () => {
      Teams.docs = [{}];
      expect(() => team.update(null, { name: 'b' })).toThrow();
      expect(() => team.update('a', 'b')).toThrow();
      expect(() => team.update('a', { notname: 'b' })).toThrow();
      expect(() => team.update('a', {})).toThrow();
    });
    it('throws if there is no matching team', () => {
      Teams.docs = [];
      expect(() => team.update('a', { name: 'b' })).toThrow();
    });
  });
  describe('team.addMember Meteor Method', () => {
    it('adds the member to the team', () => {
      Teams.docs = [{ members: ['c'] }];
      Meteor.users.docs = [{ profile: {} }];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
    it('removes the member from its old team', () => {
      Meteor.users.docs = [{ profile: { team: 'a' } }];
      expect(() => team.addMember('c', 'b')).not.toThrow();
      Teams.docs = [{ members: ['c'] }];
      Meteor.users.docs = [{ profile: { team: 'a' } }];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
    it('throws with invalid params', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [{}];
      Meteor.err = {};
      expect(() => team.addMember(null, 'b')).toThrow();
      expect(() => team.addMember('a', null)).toThrow();
      expect(() => team.addMember(1, 'b')).toThrow();
      expect(() => team.addMember('a', 2)).toThrow();
    });
    it('does not throw if there is no matching team', () => {
      Teams.docs = [];
      Meteor.users.docs = [{}];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
    it('does not throw if there is no matching user', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
    it('does not throw if the memberId is in the members array', () => {
      Teams.docs = [{ members: ['b'] }];
      Meteor.users.docs = [{}];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
  });
  describe('team.search Meteor Method', () => {
    it('calls the generic method equivalent', () => {
      expect(() => team.search('a')).not.toThrow();
    });
  });
});
