import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityForecastContainer from './OpportunityForecastContainer';
import Opportunities from '../../../api/opportunity/opportunityCollection';
import Teams from '../../../api/team/teamCollection';

describe('OpportunityForecastContainer Component', () => {
  let wrapper;
  const props = {
    hasLoaded: true,
    setHasLoaded: jest.fn(),
    setUsername: jest.fn(),
    setTeam: jest.fn(),
  };
  beforeEach(
    () => (wrapper = shallow(<OpportunityForecastContainer {...props} />))
  );
  afterEach(() => wrapper.unmount());
  it('wraps the OpportunityForecastDisplay component', () => {
    expect(wrapper.name()).toBe('OpportunityForecastDisplay');
  });
  it('subscribes and populates the opportunityForecast if there is a user, profile, team, and members', () => {
    Meteor.loggedInUser = { profile: {} };
    Opportunities.docs = [
      { closeDate: moment().date(2), status: 'CLOSED_WON', amount: 1 },
      { closeDate: moment().date(3), status: 'INVALID', amount: 2 },
    ];
    Teams.docs = [{ members: [] }];
    wrapper.setProps({});
    expect(wrapper.props().opportunityForecast).toEqual([0, 0, 0, 0, 0, 1, 0]);
    Meteor.loggedInUser = {};
    wrapper.setProps({});
    expect(wrapper.props().opportunityForecast).toEqual([0, 0, 0, 0, 0, 0, 0]);
    Meteor.loggedInUser = null;
    wrapper.setProps({});
    expect(wrapper.props().opportunityForecast).toEqual([0, 0, 0, 0, 0, 0, 0]);
    Meteor.loggedInUser = { profile: {} };
    Teams.docs = [{ members: null }];
    wrapper.setProps({});
    expect(wrapper.props().opportunityForecast).toEqual([0, 0, 0, 0, 0, 0, 0]);
    Teams.docs = [];
    wrapper.setProps({});
    expect(wrapper.props().opportunityForecast).toEqual([0, 0, 0, 0, 0, 0, 0]);
  });
});
