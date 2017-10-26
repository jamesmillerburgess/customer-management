import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Interaction, { getInteractionProps } from './Interaction';

describe('Interaction Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<Interaction {...props} />, options);
  });
  it('renders without error', () => {});
  describe('getInteractionProps Function', () => {
    it('switches on the activeInteraction', () => {
      expect(getInteractionProps({ activeInteraction: 'NEW_NOTE' })).not.toBe(
        null
      );
      expect(getInteractionProps({ activeInteraction: 'LOG_CALL' })).not.toBe(
        null
      );
      expect(getInteractionProps({ activeInteraction: 'LOG_EMAIL' })).not.toBe(
        null
      );
      expect(
        getInteractionProps({ activeInteraction: 'LOG_MEETING' })
      ).not.toBe(null);
      expect(getInteractionProps({ activeInteraction: 'LOG_QUOTE' })).not.toBe(
        null
      );
    });
  });
});
