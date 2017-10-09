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
    it('throws if there is no name', () => {
      expect(() => team.create()).toThrow();
      expect(() => team.create(null)).toThrow();
      expect(() => team.create('')).toThrow();
    });
    it('throws if there is already a team with the same name', () => {
      Teams.docs = [{ name: 'a' }];
      expect(() => team.create('a')).toThrow();
    });
  });
  describe('team.remove Meteor Method', () => {
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
      Meteor.users.docs = [{}];
      expect(() => team.addMember('a', 'b')).not.toThrow();
    });
    it('throws with invalid params', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [{}];
      expect(() => team.addMember(null, 'b')).toThrow();
      expect(() => team.addMember('a', null)).toThrow();
      expect(() => team.addMember(1, 'b')).toThrow();
      expect(() => team.addMember('a', 2)).toThrow();
      expect(() => team.addMember('a', '')).toThrow();
    });
    it('throws if there is no matching team', () => {
      Teams.docs = [];
      expect(() => team.addMember('a', 'b')).toThrow();
    });
    it('throws if there is no matching user', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [];
      expect(() => team.addMember('a', 'b')).toThrow();
    });
    it('throws if the memberId is in the members array', () => {
      Teams.docs = [{ members: ['b'] }];
      Meteor.users.docs = [{}];
      expect(() => team.addMember('a', 'b')).toThrow();
    });
  });
  describe('team.removeMember Meteor Method', () => {
    it('removes the member from the team', () => {
      Teams.docs = [{ members: ['b'] }];
      Meteor.users.docs = [{}];
      expect(() => team.removeMember('a', 'b')).not.toThrow();
    });
    it('throws with invalid params', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [{}];
      expect(() => team.removeMember(null, 'b')).toThrow();
      expect(() => team.removeMember('a', null)).toThrow();
      expect(() => team.removeMember(1, 'b')).toThrow();
      expect(() => team.removeMember('a', 2)).toThrow();
      expect(() => team.removeMember('a', '')).toThrow();
    });
    it('throws if there is no matching team', () => {
      Teams.docs = [];
      Meteor.users.docs = [{}];
      expect(() => team.removeMember('a', 'b')).toThrow();
    });
    it('throws if there is no matching user', () => {
      Teams.docs = [{}];
      Meteor.users.docs = [];
      expect(() => team.removeMember('a', 'b')).toThrow();
    });
    it('throws if the memberId is not in the members array', () => {
      Teams.docs = [{ members: ['c'] }];
      Meteor.users.docs = [{}];
      expect(() => team.removeMember('a', 'b')).toThrow();
    });
  });
  describe('team.search Meteor Method', () => {
    it('calls the generic method equivalent', () => {
      expect(() => team.search('a')).not.toThrow();
    });
  });
});
