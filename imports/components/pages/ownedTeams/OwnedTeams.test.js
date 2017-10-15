import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OwnedTeams from './OwnedTeams';

describe('OwnedTeams Component', () => {
  let wrapper;
  const options = {
    context: { store: { getState: () => ({ profile: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<OwnedTeams />, options);
  });
  it('renders without error', () => {});
});
