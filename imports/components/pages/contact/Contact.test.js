import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Contact, { properties } from './Contact';
import FieldLists from '../../../api/fieldList/fieldListCollection';

describe('Contact Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<Contact {...props} />, options);
  });
  it('renders without error', () => {});
});
