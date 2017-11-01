import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TimelineEntryContainer from './TimelineEntryContainer';
import Teams from '../../../api/team/teamCollection';

describe('TimelineEntryContainer Component', () => {
  let wrapper;
  const props = {};
  beforeEach(() => (wrapper = shallow(<TimelineEntryContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the TimelineEntryDisplay component', () => {
    expect(wrapper.name()).toBe('TimelineEntryDisplay');
  });
  it('sets the avatarURL if the subscription is ready and the user has an avatarURL', () => {
    Meteor.users.docs = [{ profile: { avatarURL: 'a' } }];
    Meteor.ready = true;
    expect(wrapper.props().avatarURL).toBe('empty-profile-pic_wqnyvm.png');
    wrapper.setProps({});
    expect(wrapper.props().avatarURL).toBe('a');
    Meteor.users.docs = [{}];
    wrapper.setProps({});
    expect(wrapper.props().avatarURL).toBe('empty-profile-pic_wqnyvm.png');
  });
});
