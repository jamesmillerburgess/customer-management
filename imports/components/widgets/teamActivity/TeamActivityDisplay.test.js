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
  it('renders the timeline only if there is at least one activity', () => {
    wrapper.setProps({ activity: [{ id: 'a' }] });
    expect(wrapper.hasClass('team-activity')).toBe(true);
    wrapper.setProps({ activity: [] });
    expect(wrapper.hasClass('team-activity')).toBe(false);
  });
});
