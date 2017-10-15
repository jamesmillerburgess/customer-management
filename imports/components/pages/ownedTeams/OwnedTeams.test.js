import React from 'react';
import { shallow } from 'enzyme';

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
