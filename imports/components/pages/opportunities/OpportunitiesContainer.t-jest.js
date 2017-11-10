import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Opportunities from '../../../api/opportunity/opportunityCollection';
import OpportunitiesContainer, * as OC from './OpportunitiesContainer';
import Teams from '../../../api/team/teamCollection';

describe('OpportunitiesContainer.js', () => {
  describe('getOwnerQuery Function', () => {
    it('switches the query based on the filter', () => {
      Meteor._userId = 'a';
      Meteor.loggedInUser = { profile: { team: 'x' } };
      Teams.docs = [{ members: ['b'] }];
      expect(OC.getOwnerQuery('')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(OC.getOwnerQuery('SELF')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(OC.getOwnerQuery('TEAM')).toEqual({ 'users.0': { $in: ['b'] } });
      expect(OC.getOwnerQuery('ANY')).toEqual({});
    });
    it('handles missing users an teams', () => {
      Meteor._userId = 'a';
      Meteor.loggedInUser = undefined;
      Teams.docs = [];
      expect(OC.getOwnerQuery('')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(OC.getOwnerQuery('SELF')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(OC.getOwnerQuery('TEAM')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(OC.getOwnerQuery('ANY')).toEqual({});
    });
  });
  describe('OpportunitiesContainer Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<OpportunitiesContainer />)));
    afterEach(() => wrapper.unmount());
    it('wraps the OpportunitiesDisplay component', () => {
      expect(wrapper.name()).toBe('OpportunitiesDisplay');
    });
    it('returns no items if there is no user', () => {
      Meteor._userId = {};
      Opportunities.docs = [{}];
      const props = { ownerFilter: '' };
      expect(OC.linkMeteorData(props).opportunities).toEqual([{}]);
      Meteor._userId = null;
      expect(OC.linkMeteorData(props).opportunities).toEqual([]);
    });
    it('switches between the ownerFilters', () => {
      Meteor._userId = {};
      Meteor.loggedInUser = { profile: { team: 'a' } };
      Opportunities.docs = [{}];
      const props = { ownerFilter: '' };
      expect(OC.linkMeteorData(props).opportunities).toEqual([{}]);
      props.ownerFilter = 'SELF';
      expect(OC.linkMeteorData(props).opportunities).toEqual([{}]);
      props.ownerFilter = 'TEAM';
      expect(OC.linkMeteorData(props).opportunities).toEqual([{}]);
      props.ownerFilter = 'ANY';
      expect(OC.linkMeteorData(props).opportunities).toEqual([{}]);
    });
    it('handles incomplete user profiles', () => {
      Meteor._userId = {};
      Meteor.loggedInUser = { profile: { team: 'a' } };
      Opportunities.docs = [{}];
      const props = { ownerFilter: '' };
      expect(() => OC.linkMeteorData(props)).not.toThrow();
      Meteor.loggedInUser = { profile: {} };
      expect(() => OC.linkMeteorData(props)).not.toThrow();
      Meteor.loggedInUser = {};
      expect(() => OC.linkMeteorData(props)).not.toThrow();
      Meteor.loggedInUser = null;
      expect(() => OC.linkMeteorData(props)).not.toThrow();
    });
  });
});
