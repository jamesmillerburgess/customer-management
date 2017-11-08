import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AddContact from './AddContact';

describe('AddContact Component', () => {
  it('exports without error', () => {});
});
