import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TeamActivityDisplay from './TeamActivityDisplay';

describe('TeamActivityDisplay Component', () => {
  let wrapper;
  const props = { activity: [] };
  beforeEach(() => {
    wrapper = shallow(<TeamActivityDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders the timeline only if showWidget is true', () => {
    wrapper.setProps({ showWidget: true, activity: [{ _id: 'a' }] });
    expect(wrapper.hasClass('team-activity')).toBe(true);
    wrapper.setProps({ showWidget: false, activity: [{ _id: 'a' }] });
    expect(wrapper.hasClass('team-activity')).toBe(false);
  });
});
