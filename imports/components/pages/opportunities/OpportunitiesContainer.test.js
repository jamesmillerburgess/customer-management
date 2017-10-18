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
    expect(linkMeteorData().opportunities).toEqual([{}]);
    Meteor._userId = null;
    expect(linkMeteorData().opportunities).toEqual([]);
  });
});
