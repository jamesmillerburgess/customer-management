import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TeamActivityContainer from './TeamActivityContainer';
import Activity from '../../../api/activity/activityCollection';
import Teams from '../../../api/team/teamCollection';

describe('TeamActivityContainer Component', () => {
  let wrapper;
  const props = {
    hasLoaded: true,
    setHasLoaded: jest.fn(),
    setUsername: jest.fn(),
    setTeam: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<TeamActivityContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the TeamActivityDisplay component', () => {
    expect(wrapper.name()).toBe('TeamActivityDisplay');
  });
  it('subscribes and populates the activity if there is a user and a profile', () => {
    Meteor.loggedInUser = { profile: {} };
    Activity.docs = [{ timestamp: 1 }, { timestamp: 2 }];
    wrapper.setProps({});
    expect(wrapper.props().activity).toEqual([
      { timestamp: 2 },
      { timestamp: 1 },
    ]);
    Teams.docs = [];
    wrapper.setProps({});
    expect(wrapper.props().activity).toEqual([
      { timestamp: 2 },
      { timestamp: 1 },
    ]);
    Teams.docs = [{ members: [] }];
    wrapper.setProps({});
    expect(wrapper.props().activity).toEqual([
      { timestamp: 2 },
      { timestamp: 1 },
    ]);
    Meteor.loggedInUser = {};
    wrapper.setProps({});
    expect(wrapper.props().activity).toEqual([]);
    Meteor.loggedInUser = null;
    wrapper.setProps({});
    expect(wrapper.props().activity).toEqual([]);
  });
});
