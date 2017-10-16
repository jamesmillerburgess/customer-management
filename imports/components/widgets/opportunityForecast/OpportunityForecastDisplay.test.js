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
  it('renders the graph only if the total forecast is greater than zero', () => {
    wrapper.setProps({ opportunityForecast: [1, 0, 0, 0, 0, 0, 0, 0] });
    expect(wrapper.hasClass('opportunity-forecast')).toBe(true);
    wrapper.setProps({ opportunityForecast: [0, 0, 0, 0, 0, 0, 0, 0] });
    expect(wrapper.hasClass('opportunity-forecast')).toBe(false);
  });
});
