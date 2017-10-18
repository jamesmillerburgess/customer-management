import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityForecast from './OpportunityForecast';

describe('OpportunityForecast Component', () => {
  let wrapper;
  const options = {
    context: {
      store: { subscribe: jest.fn(), getState: () => ({ profile: {} }) },
    },
  };
  beforeEach(() => {
    wrapper = shallow(<OpportunityForecast />, options);
  });
  it('renders without error', () => {});
});
