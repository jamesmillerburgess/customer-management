import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ListPageContainer, * as LPC from './ListPageContainer';
import Teams from '../../../api/team/teamCollection';

describe('ListPageContainer.js', () => {
  describe('getOwnerQuery Function', () => {
    it('switches the query based on the filter', () => {
      Meteor._userId = 'a';
      Meteor.loggedInUser = { profile: { team: 'x' } };
      Teams.docs = [{ members: ['b'] }];
      expect(LPC.getOwnerQuery('')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(LPC.getOwnerQuery('SELF')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(LPC.getOwnerQuery('TEAM')).toEqual({ 'users.0': { $in: ['b'] } });
      expect(LPC.getOwnerQuery('ANY')).toEqual({});
    });
    it('handles missing users an teams', () => {
      Meteor._userId = 'a';
      Meteor.loggedInUser = undefined;
      Teams.docs = [];
      expect(LPC.getOwnerQuery('')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(LPC.getOwnerQuery('SELF')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(LPC.getOwnerQuery('TEAM')).toEqual({ 'users.0': { $in: ['a'] } });
      expect(LPC.getOwnerQuery('ANY')).toEqual({});
    });
  });
  describe('ListPageContainer Component', () => {
    let wrapper;
    const props = { collection: new Mongo.Collection() };
    beforeEach(() => (wrapper = shallow(<ListPageContainer {...props} />)));
    afterEach(() => wrapper.unmount());
    it('wraps the ListPageDisplay component', () => {
      expect(wrapper.name()).toBe('ListPageDisplay');
    });
    it('returns no items if there is no user', () => {
      Meteor._userId = {};
      props.collection.docs = [{}];
      expect(LPC.linkMeteorData(props).data).toEqual([{}]);
      Meteor._userId = null;
      expect(LPC.linkMeteorData(props).data).toEqual([]);
    });
  });
});
