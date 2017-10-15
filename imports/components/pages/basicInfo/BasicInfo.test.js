import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BasicInfo from './BasicInfo';

describe('BasicInfo Component', () => {
  let wrapper;
  const options = {
    context: {
      store: { subscribe: jest.fn(), getState: () => ({ profile: {} }) },
    },
  };
  beforeEach(() => {
    wrapper = shallow(<BasicInfo />, options);
  });
  it('renders without error', () => {});
});
