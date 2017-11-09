import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TeamField, {
  optionRenderer,
  valueRenderer,
  loadOptions,
} from './TeamField';

describe('TeamField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TeamField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
