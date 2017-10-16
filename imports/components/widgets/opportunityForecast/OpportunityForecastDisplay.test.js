import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityForecastDisplay from './OpportunityForecastDisplay';

describe('OpportunityForecastDisplay Component', () => {
  let wrapper;
  const props = { opportunityForecast: [] };
  beforeEach(() => {
    wrapper = shallow(<OpportunityForecastDisplay {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
