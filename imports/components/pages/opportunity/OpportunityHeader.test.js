import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OpportunityHeader from './OpportunityHeader';

describe('OpportunityHeader Component', () => {
  let wrapper;
  const props = { opportunity: {} };
  beforeEach(() => {
    wrapper = shallow(<OpportunityHeader {...props} />);
  });
  it('renders without error', () => {});
  it('renders the value of amount if it exists', () => {
    wrapper.setProps({ opportunity: { amount: 1 } });
    expect(
      wrapper
        .find('.value Localize')
        .at(0)
        .props().value
    ).toBe(1);
  });
  it('renders a placeholder for amount if it does not exist', () => {
    wrapper.setProps({ opportunity: { amount: null } });
    expect(
      wrapper
        .find('.placeholder Translate')
        .at(0)
        .props().value
    ).toBe('opportunities.fields.amountPlaceholder');
  });
  it('renders the value of closeDate if it exists', () => {
    wrapper.setProps({ opportunity: { closeDate: '20170101' } });
    expect(
      wrapper
        .find('.value Localize')
        .at(0)
        .props().value
    ).toBe('20170101');
  });
  it('renders a placeholder for closeDate if it does not exist', () => {
    wrapper.setProps({ opportunity: { closeDate: null } });
    expect(
      wrapper
        .find('.placeholder Translate')
        .at(1)
        .props().value
    ).toBe('opportunities.fields.closeDatePlaceholder');
  });
});
