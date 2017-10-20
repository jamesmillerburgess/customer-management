import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BasicInfoContainer from './BasicInfoContainer';
import Teams from '../../../api/team/teamCollection';

describe('BasicInfoContainer Component', () => {
  let wrapper;
  const props = {
    hasLoaded: true,
    setHasLoaded: jest.fn(),
    setUsername: jest.fn(),
    setTeam: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<BasicInfoContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the BasicInfoDisplay component', () => {
    expect(wrapper.name()).toBe('BasicInfoDisplay');
  });
  it('it calls the dispatchers if it is not logging in and has not loaded', () => {
    Meteor.isLoggingIn = false;
    Meteor.loggedInUser = { profile: { team: 'a' } };
    props.hasLoaded = false;
    Teams.docs = [{ name: 'a' }];
    props.setHasLoaded = jest.fn();
    props.setUsername = jest.fn();
    props.setTeam = jest.fn();
    expect(props.setHasLoaded).toHaveBeenCalledTimes(0);
    expect(props.setUsername).toHaveBeenCalledTimes(0);
    expect(props.setTeam).toHaveBeenCalledTimes(0);
    wrapper.setProps({ ...props });
    expect(props.setHasLoaded).toHaveBeenCalledTimes(1);
    expect(props.setUsername).toHaveBeenCalledTimes(1);
    expect(props.setTeam).toHaveBeenCalledTimes(1);
    Meteor.loggedInUser = { profile: {} };
    wrapper.setProps({ ...props });
    expect(props.setHasLoaded).toHaveBeenCalledTimes(2);
    expect(props.setUsername).toHaveBeenCalledTimes(2);
    expect(props.setTeam).toHaveBeenCalledTimes(2);
  });
  it('does not call the dispatchers if not logging in an has loaded', () => {
    Meteor.isLoggingIn = false;
    Meteor.loggedInUser = { profile: {} };
    props.hasLoaded = true;
    props.setHasLoaded = jest.fn();
    props.setUsername = jest.fn();
    props.setTeam = jest.fn();
    expect(props.setHasLoaded).toHaveBeenCalledTimes(0);
    expect(props.setUsername).toHaveBeenCalledTimes(0);
    expect(props.setTeam).toHaveBeenCalledTimes(0);
    wrapper.setProps({ ...props });
    expect(props.setHasLoaded).toHaveBeenCalledTimes(0);
    expect(props.setUsername).toHaveBeenCalledTimes(0);
    expect(props.setTeam).toHaveBeenCalledTimes(0);
  });
  it('does not call the dispatchers if logging in', () => {
    Meteor.isLoggingIn = true;
    Meteor.loggedInUser = { profile: {} };
    props.hasLoaded = false;
    props.setHasLoaded = jest.fn();
    props.setUsername = jest.fn();
    props.setTeam = jest.fn();
    expect(props.setHasLoaded).toHaveBeenCalledTimes(0);
    expect(props.setUsername).toHaveBeenCalledTimes(0);
    expect(props.setTeam).toHaveBeenCalledTimes(0);
    wrapper.setProps({ ...props });
    expect(props.setHasLoaded).toHaveBeenCalledTimes(0);
    expect(props.setUsername).toHaveBeenCalledTimes(0);
    expect(props.setTeam).toHaveBeenCalledTimes(0);
  });
});
