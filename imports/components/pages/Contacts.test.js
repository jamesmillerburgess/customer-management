import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Contacts from './Contacts';

describe('Contacts', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Contacts />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
