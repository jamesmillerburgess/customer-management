import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OwnedTeamsContainer from './OwnedTeamsContainer';
import Teams from '../../../api/team/teamCollection';

describe('OwnedTeamsContainer Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => (wrapper = shallow(<OwnedTeamsContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the Connect(OwnedTeamsDisplay) component', () => {
    expect(wrapper.name()).toBe('Connect(OwnedTeamsDisplay)');
  });
  it('fetches ownedTeams if there is a user with a profile', () => {
    Meteor.loggedInUser = { profile: {} };
    Teams.docs = [{}, {}];
    wrapper.setProps({});
    expect(wrapper.props().ownedTeams).toEqual([{}, {}]);
    Meteor.loggedInUser = {};
    wrapper.setProps({});
    expect(wrapper.props().ownedTeams).toEqual([]);
    Meteor.loggedInUser = null;
    wrapper.setProps({});
    expect(wrapper.props().ownedTeams).toEqual([]);
  });
});
