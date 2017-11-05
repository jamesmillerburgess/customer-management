import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Opportunities from '../../../api/opportunity/opportunityCollection';
import OpportunitiesContainer, {
  linkMeteorData,
} from './OpportunitiesContainer';

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
    expect(linkMeteorData(props).opportunities).toEqual([{}]);
    Meteor._userId = null;
    expect(linkMeteorData(props).opportunities).toEqual([]);
  });
  it('switches between the ownerFilters', () => {
    Meteor._userId = {};
    Meteor.loggedInUser = { profile: { team: 'a' } };
    Opportunities.docs = [{}];
    const props = { ownerFilter: '' };
    expect(linkMeteorData(props).opportunities).toEqual([{}]);
    props.ownerFilter = 'SELF';
    expect(linkMeteorData(props).opportunities).toEqual([{}]);
    props.ownerFilter = 'TEAM';
    expect(linkMeteorData(props).opportunities).toEqual([{}]);
    props.ownerFilter = 'ANY';
    expect(linkMeteorData(props).opportunities).toEqual([{}]);
  });
  it('handles incomplete user profiles', () => {
    Meteor._userId = {};
    Meteor.loggedInUser = { profile: { team: 'a' } };
    Opportunities.docs = [{}];
    const props = { ownerFilter: '' };
    expect(() => linkMeteorData(props)).not.toThrow();
    Meteor.loggedInUser = { profile: {} };
    expect(() => linkMeteorData(props)).not.toThrow();
    Meteor.loggedInUser = {};
    expect(() => linkMeteorData(props)).not.toThrow();
    Meteor.loggedInUser = null;
    expect(() => linkMeteorData(props)).not.toThrow();
  });
});
